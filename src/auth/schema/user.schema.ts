import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { CreateBookDto } from "src/book/dto/create-book.dto";

@Schema({
     timestamps: true  
})
export class User extends Document{
    static req(book: CreateBookDto, req: any): import("../../book/schema/book.schema").Book | PromiseLike<import("../../book/schema/book.schema").Book> {
        throw new Error('Method not implemented.');
    }

    @Prop()
    name: string 

    @Prop({ unique: [true, 'Duplicate email entered'] })
    email: string

    @Prop()
    password: string
}

export const UserSchema = SchemaFactory.createForClass(User)