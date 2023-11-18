import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class LoginDto {

    @IsNotEmpty()
    @IsEmail({}, { message: "please enter correct email" })
    @ApiProperty({ description: 'user Email', required: false })
    readonly email:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @ApiProperty({ description: 'user Password', required: false })
    readonly password:string ;
}