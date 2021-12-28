import { HttpError } from 'routing-controllers';

export class NotFoundError extends HttpError {
    constructor(message: string) {
        super(404, `NOT_FOUND_ERROR : ${message}`);
    }
}

