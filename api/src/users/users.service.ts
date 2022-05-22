import { BadRequestException, Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.findByEmail(createUserDto.email) || await this.findByPhone(createUserDto.phone);

    if(user) {
      throw new BadRequestException('User already exists');
    }

    return this.prisma.user.create({
      data: {
        ...createUserDto,
        password: await hash(createUserDto.password, 10)
      }
    })
  }

  async findByPhone(phone: string) {
    return await this.prisma.user.findFirst({
      where: {
        phone,
      },
    });
  }

  async findByEmail(email: string) {
    return await this.prisma.user.findFirst({
      where: {
        email,
      },
    });
  }
  
}