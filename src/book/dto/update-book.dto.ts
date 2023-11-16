import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { Category } from "../schema/book.schema";
import { ApiProperty } from "@nestjs/swagger"; // Import Swagger decorator

export class UpdateBookDto {

    @IsOptional()
    @IsString()
    @ApiProperty({ description: 'Title of the book', required: false })
    readonly title: string;

    @IsOptional()
    @IsString()
    @ApiProperty({ description: 'Description of the book', required: false })
    readonly description: string;

    @IsOptional()
    @IsString()
    @ApiProperty({ description: 'Author of the book', required: false })
    readonly author: string;

    @IsOptional()
    @IsNumber()
    @ApiProperty({ description: 'Price of the book', required: false })
    readonly price: number;

    @IsOptional()
    @IsEnum(Category, { message: 'Please enter correct category.' })
    @ApiProperty({
        description: 'Category of the book',
        enum: Category,
        enumName: 'Category',
        required: false,
    })
    readonly category: Category;
}
