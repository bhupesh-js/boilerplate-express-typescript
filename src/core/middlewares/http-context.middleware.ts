import {Request, Response, NextFunction } from 'express';
import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";
import { Service } from "typedi";
import { Context } from '../context';

/**
 * Compress the responses
 */
@Middleware({ type: "before" })
@Service()
export class HttpContextMiddleware implements ExpressMiddlewareInterface {

  constructor(private context: Context){}
  
  public use(req: Request, res: Response, next: NextFunction) {
      this.context.setContext(req, res);
      next()
  }
}
