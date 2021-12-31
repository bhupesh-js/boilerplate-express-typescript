import "reflect-metadata";
import { Logger, configLogger } from "./core/logger";
import { env } from './env';
import { banner } from "./core/banner";
import app from './app';

export class Application {

	constructor() {
		configLogger(env.log.level);
		const logger = new Logger("App");

		const port = env.app.port;

		// Start Webserver
		app.listen(port, () => {
			logger.info(`🌏 Express server started at http://localhost:${port}`);
		});

		banner(logger);
	}
}

export default new Application();