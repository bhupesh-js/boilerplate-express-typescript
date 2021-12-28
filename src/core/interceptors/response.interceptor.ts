/* eslint-disable @typescript-eslint/no-explicit-any */
import { Service } from "typedi";
import { Interceptor, InterceptorInterface, Action } from "routing-controllers";


/**
 * Intercepts the responses and standardizes the response format 
 * Format: status and data
 */
@Interceptor()
@Service()
export class ResponseInterceptor implements InterceptorInterface {
  intercept(action: Action, content: any) {
    return {
      status:"success",
      data:content
    };
  }
}
