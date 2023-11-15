import {Body, Controller,Post, Get, Put, Param, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schema/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

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

  @Get()
  async getBook(
    @Param('id')
    id: string
  ): Promise<Book> {
    return this.bookService.findById(id);
  }

  @Put()
  async updateBook(
    @Param('id')
    id: string, 
    @Body()
    book: UpdateBookDto, 
  ): Promise<Book>{
    return this.bookService.updateById(id, book);
  }

  @Delete(':id')
  async deleteBook(
    @Param('id')
    id: string, 
  ): Promise<Book> {
    return this.bookService.deleteById(id);
  }

}
