import { IsString } from "class-validator";

export class BookResponse{

    /**
     *
     * Name of the book
     * @type {string}
     * @memberof BookResponse
     */
    @IsString()
    name:string;


    /**
     *
     * Author of the book
     * @type {string}
     * @memberof BookResponse
     */
    @IsString()
    author:string
}