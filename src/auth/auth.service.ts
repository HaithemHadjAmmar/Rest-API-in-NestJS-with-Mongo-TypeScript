import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userMode: Model<User>
    ) {}

    async signUp(signUpDto) {
        const { name, email, password } = signUpDto

        const hashedpassword = await bcrypt.hash(password, 10);
    }
}
