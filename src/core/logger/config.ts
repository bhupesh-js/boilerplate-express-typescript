import { format, transports } from "winston";
import * as winston from "winston";


/**
 * Configures default winston logger
 */
 export const configLogger = (logLevel: string) => {


  // Create logger
  const logger = winston.createLogger({
    transports: [
      new transports.Console({
        level: logLevel,
        handleExceptions: true,
        format:
           format.combine(
             format.colorize(),
             format.simple()
           )

      })
    ]
  });

  // Attach logger to default logger
  winston.add(logger);
};
