import { Request, Response } from "express";
import * as httpContext from "express-http-context";
import { Service } from "typedi";
import { v4 as uuidv4 } from "uuid";

enum CONTEXT_VALUES {
  REQUEST_ID = "requestId",
}


@Service()
export class Context {
  
  setContext(req: Request, res: Response): void {
    httpContext.ns.bindEmitter(req);
    httpContext.ns.bindEmitter(res);
    const requestId = req.headers["x-request-id"] || uuidv4();
    httpContext.set(CONTEXT_VALUES.REQUEST_ID, requestId);
  }

    getRequestId():string {
    return httpContext.get(CONTEXT_VALUES.REQUEST_ID);
  }
}
