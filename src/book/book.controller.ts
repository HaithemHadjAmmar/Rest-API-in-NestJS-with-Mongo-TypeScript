import {Body, Controller,Post, Get } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schema/book.schema';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BookController {
    constructor(private bookService: BookService) {}

    @Post()
    async createBook(
        @Body()
        book: CreateBookDto
    ): Promise<Book> {
        return this.bookService.create(book);
    } 

  @Get()
   async getAllBooks(): Promise<Book[]> {
    return this.bookService.findAll()
 }

}
