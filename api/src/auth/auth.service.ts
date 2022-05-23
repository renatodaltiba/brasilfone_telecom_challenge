import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { compareSync } from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: any) {
    const payload = {
      sub: user.id,
      email: user.email,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }


  async validateUser(phone: string, password: string){
    let user: User;
    try {
      user = await this.userService.findPerson(phone) 
    } catch (err) {
      return null;
    }


    const isPasswordMatched = compareSync(password, user.password);
    if (!isPasswordMatched) {
      return null;
    }

    return user;
  }
}