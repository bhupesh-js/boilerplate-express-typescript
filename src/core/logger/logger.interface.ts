/* eslint-disable @typescript-eslint/no-explicit-any */
export interface LoggerInterface {

    /**
     *
     *
     * @param {string} message
     * @param {...any[]} args
     * @memberof LoggerInterface
     */
    debug(message: string, ...args: any[]): void;


    /**
     *
     *
     * @param {string} message
     * @param {...any[]} args
     * @memberof LoggerInterface
     */
    info(message: string, ...args: any[]): void;


    /**
     *
     *
     * @param {string} message
     * @param {...any[]} args
     * @memberof LoggerInterface
     */
    warn(message: string, ...args: any[]): void;


    /**
     *
     *
     * @param {string} message
     * @param {...any[]} args
     * @memberof LoggerInterface
     */
    error(message: string, ...args: any[]): void;
}
