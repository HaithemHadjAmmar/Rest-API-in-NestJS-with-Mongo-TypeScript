import { Prop, Schema } from "@nestjs/mongoose";

@Schema({
     timestamps: true  
})
export class User {

    @Prop()
    name: string

    @Prop()
    email: string

    @Prop()
    password: string
}