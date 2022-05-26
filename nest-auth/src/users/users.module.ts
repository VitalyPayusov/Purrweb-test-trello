import {forwardRef, Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { AuthModule } from "src/auth/auth.module";
import {UsersController} from "./users.controller";
import {Users} from "./users.entity";
import {UsersService} from "./users.service";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([Users]),
  ],
  exports: [UsersService]
})
export class UsersModule {}
