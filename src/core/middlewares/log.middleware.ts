import {Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';
import { Service } from "typedi";
import { env } from '../../env';
import { Logger } from '../logger';

@Middleware({ type: 'before' })
@Service()
export class LogMiddleware implements ExpressMiddlewareInterface {

    private log = new Logger(__dirname);

    public use(req: Request, res: Response, next: NextFunction) {
        return morgan(env.log.output, {
            stream: {
                write: this.log.info.bind(this.log),
            },
        })(req, res, next);
    }

}
