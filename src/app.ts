import express from "express";
import * as httpContext from "express-http-context";
import { useContainer, useExpressServer } from "routing-controllers";
import { Container } from "typedi";
import * as swaggerUi from 'swagger-ui-express';
import { env } from './env';
import { swaggerConfig } from "./core/swagger";


const app =  express();

// Use http context as middleware
app.use(httpContext.middleware);

// Setup routing-controllers to use typedi container.
useContainer(Container);

useExpressServer(app, {
		cors: true,
		classTransformer: true,
		defaultErrorHandler: false,
		routePrefix: env.app.routePrefix,

		controllers: [__dirname + "/controllers/*.ts"],
		middlewares: [__dirname +"/core/middlewares/*.ts"],
		interceptors: [__dirname +"/core/interceptors/*.ts"],
});

//Swagger config
app.use(env.swagger.route, swaggerUi.serve,  swaggerUi.setup(swaggerConfig()) )

export default app;