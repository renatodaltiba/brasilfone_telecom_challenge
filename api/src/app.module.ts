import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersResolver } from './users/users.resolver';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, UsersModule],
  controllers: [],
  providers: [UsersResolver],
})
export class AppModule {}
