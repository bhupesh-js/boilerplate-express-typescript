import { IsString } from "class-validator";


export class BookPostRequest {


	/**
	 *
	 * Name of the book
	 * @type {string}
	 * @memberof BookPostRequest
	 */
	@IsString()
	name: string;


	/**
	 *
	 * Author of the book
	 * @type {string}
	 * @memberof BookPostRequest
	 */
	@IsString()
	author: string;

}