import { HttpError } from 'routing-controllers';

export class BadRequestError extends HttpError {
    constructor(message: string) {
        super(400, `BAD_REQUEST : ${message}`);
    }
}