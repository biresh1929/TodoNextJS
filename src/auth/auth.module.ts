import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DatabaseModule } from 'src/database/database.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports:[
    DatabaseModule,
    PassportModule,
    JwtModule.register({
      global:true,
      secret:'Secret',
      signOptions:{
        expiresIn:'15m'
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService , JwtStrategy],
  exports :[AuthService]
})
export class AuthModule {}
