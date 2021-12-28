import { HttpError } from 'routing-controllers';

export class ServerError extends HttpError {
  constructor(message: string) {
      super(500, `SERVER_ERROR :${message}`);
  }
}