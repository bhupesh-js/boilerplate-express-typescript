import {
	JsonController,
	Body,
	Post
} from "routing-controllers";
import { Service } from "typedi";
import { BaseService } from "../core/base.service";
import { BookPostRequest } from "./request";
import { BookResponse } from "./response";


@JsonController()
@Service()
export class BookController extends BaseService {
	
	constructor() {
		super(__filename);
	}

	@Post("/book")
	post( @Body({ required: true }) book: BookPostRequest ): BookResponse {
		
        this._logger.info(`Post Book`);
		return book;
	}

}
