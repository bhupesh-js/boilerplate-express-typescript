import {Request, Response, NextFunction } from 'express';
import * as helmet from 'helmet';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';
import { Service } from 'typedi';


@Middleware({ type: 'before' })
@Service()
export class SecurityHstsMiddleware implements ExpressMiddlewareInterface {

    public use(req: Request, res: Response, next: NextFunction) {
        return helmet.hsts({
            maxAge: 31536000,
            includeSubDomains: true
        })(req, res, next);
    }

}
