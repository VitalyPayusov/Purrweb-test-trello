import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { AuthModule } from "src/auth/auth.module";
import { UsersModule } from "src/users/users.module";
import {ColumnsController} from "./columns.controller";
import {Columns} from "./columns.entity";
import {ColumnsService} from "./columns.service";

@Module({
  imports: [
    UsersModule,
    AuthModule,
    TypeOrmModule.forFeature([Columns]),
  ],
  controllers: [ColumnsController],
  providers: [ColumnsService],
  exports: [ColumnsService]
})
export class ColumnsModule {}
