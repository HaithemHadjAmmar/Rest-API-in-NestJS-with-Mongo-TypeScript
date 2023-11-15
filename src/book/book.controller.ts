import {Body, Controller,Post, Get } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schema/book.schema';

@Controller('books')
export class BookController {
    constructor(private bookService: BookService) {}

    @Post()
    async createBook(
        @Body()
        book,
    ): Promise<Book> {
        return this.bookService.create(book);
    } 

  @Get()
   async getAllBooks(): Promise<Book[]> {
    return this.bookService.findAll()
 }

}
