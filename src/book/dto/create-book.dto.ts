import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Category } from "../schema/book.schema";
import { ApiProperty } from "@nestjs/swagger"; // Import Swagger decorator

export class CreateBookDto {

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'Title of the book' })
    readonly title: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'Description of the book' })
    readonly description: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'Author of the book' })
    readonly author: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({ description: 'Price of the book' })
    readonly price: number;

    @IsNotEmpty()
    @IsEnum(Category, { message: 'Please enter correct category.' })
    @ApiProperty({
        description: 'Category of the book',
        enum: Category,
        enumName: 'Category',
    })
    readonly category: Category;
}
