import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  async me(@Req() req) {
    const data = await this.usersService.findByEmail(req.user.email);
    return {
      name: data.name,
      email: data.email,
      phone: data.phone,
      offers: data.offers,
      createdAt: data.createdAt,
    }
  }
}
