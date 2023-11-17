import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/signup')
    @ApiOperation({ summary: 'SignUp' })
    signUp(@Body() signUpDto: SignUpDto): Promise<{token: string}> {
        return this.authService.signUp(signUpDto);
    }

    @Post('/login')
    @ApiOperation({ summary: 'login' })
    Login(@Body() loginDto: LoginDto): Promise<{token: string}> {
        return this.authService.login(loginDto);
    }
}
