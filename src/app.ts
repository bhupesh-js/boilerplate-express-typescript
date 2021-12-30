import "reflect-metadata";
import express from "express";
import * as httpContext from "express-http-context";
import { useContainer, useExpressServer } from "routing-controllers";
import { Container } from "typedi";
import * as swaggerUi from 'swagger-ui-express';
import { Logger, configLogger } from "./core/logger";
import { env } from './env';
import { banner } from "./core/banner";
import { swaggerConfig } from "./core/swagger";

export class Application {
	
	server: express.Application;

	constructor() {
		configLogger(env.log.level);

		const logger = new Logger("App");

		this.server = express();

		// Use http context as middleware
		this.server.use(httpContext.middleware);

		// Setup routing-controllers to use typedi container.
		useContainer(Container);

		useExpressServer(this.server, {
			cors: true,
			classTransformer: true,
			defaultErrorHandler: false,
			routePrefix: env.app.routePrefix,

			controllers: [__dirname + "/controllers/*.ts"],
			middlewares: [__dirname +"/core/middlewares/*.ts"],
			interceptors: [__dirname +"/core/interceptors/*.ts"],
		});
		
		this.server.use(env.swagger.route, swaggerUi.serve,  swaggerUi.setup(swaggerConfig()) )

		const port = env.app.port;


		// Start Webserver
		this.server.listen(port, () => {
			logger.info(`🌏 Express server started at http://localhost:${port}`);
		});

		banner(logger);
	}
}

export default new Application()