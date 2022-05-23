import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { compareSync } from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { AuthDTO } from './dto/auth-dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(authDTO: AuthDTO) {
    const user = await this.validateUser(authDTO.emailorphone, authDTO.password);


    const payload = {
      sub: user.id,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }


  async validateUser(emailorphone: string, password: string){
    const user: User = await this.userService.findPerson(emailorphone);

      if (!user) {
        throw new UnauthorizedException();
      }
    
    const isPasswordMatched = compareSync(password, user.password);
    
    if (!isPasswordMatched) {
      return null;
    }

    return user;
  }
}