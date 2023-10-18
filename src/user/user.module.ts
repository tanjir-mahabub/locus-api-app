import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SeederService } from './seeder.service';

@Module({
  controllers: [UserController],
  providers: [UserService, SeederService],
  exports: [UserService, SeederService]
})
export class UserModule {}
