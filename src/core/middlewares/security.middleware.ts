import {Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';
import { Service } from 'typedi';


@Middleware({ type: 'before' })
@Service()
export class SecurityMiddleware implements ExpressMiddlewareInterface {

    public use(req: Request, res: Response, next: NextFunction) {
        return helmet()(req, res, next);
    }

}
