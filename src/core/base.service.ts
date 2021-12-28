import { Logger } from "./logger";

/**
 * Base service class.
 * Exposes the logger to the controllers and service
 */
export abstract class BaseService {
  protected _logger: Logger;

  constructor(filename: string) {
    this._logger = new Logger(filename);
  }

}
