import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(phoneoremail: string, password: string) {
    const user = await this.authService.validateUser(phoneoremail, password);
    if (!user) throw new UnauthorizedException('E-mail e/ou senha inválidos');
    return user;
  }
}