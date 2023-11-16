import { IsNotEmpty, IsString } from "class-validator";
import { Category } from "../schema/book.schema";

export class CreateBookDto {

    @IsNotEmpty()
    @IsString()
    readonly title: string;
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly category: Category;
}