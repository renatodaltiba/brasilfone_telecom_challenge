import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { RefreshTokenModule } from './refresh-token/refresh-token.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, PrismaModule, AuthModule, RefreshTokenModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
