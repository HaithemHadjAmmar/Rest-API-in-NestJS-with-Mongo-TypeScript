import { Body, Controller, Post, Get, Put, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { BookService } from './book.service';
import { Book } from './schema/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Books')
@Controller('books')
export class BookController {
    constructor(private bookService: BookService) {}

    @Post()
    @UseGuards(AuthGuard())
    @ApiOperation({ summary: 'Create a book' })
    async createBook(
        @Body() book: CreateBookDto
    ): Promise<Book> {
        return this.bookService.create(book);
    } 

    @Get()
    @ApiOperation({ summary: 'Get all books' }) // Describe the operation
    @ApiQuery({ name: 'yourQuery', required: false }) // Add query parameter documentation
    async getAllBooks(@Query() query: ExpressQuery): Promise<Book[]> {
        return this.bookService.findAll(query)
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a book by ID' }) // Describe the operation
    @ApiParam({ name: 'id', type: 'string' }) // Add parameter documentation
    async getBook(
        @Param('id') id: string
    ): Promise<Book> {
        return this.bookService.findById(id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a book by ID' }) // Describe the operation
    @ApiParam({ name: 'id', type: 'string' }) // Add parameter documentation
    async updateBook(
        @Param('id') id: string, 
        @Body() book: UpdateBookDto, 
    ): Promise<Book>{
        return this.bookService.updateById(id, book);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a book by ID' }) // Describe the operation
    @ApiParam({ name: 'id', type: 'string' }) // Add parameter documentation
    async deleteBook(
        @Param('id') id: string, 
    ): Promise<Book> {
        return this.bookService.deleteById(id);
    } 
}
