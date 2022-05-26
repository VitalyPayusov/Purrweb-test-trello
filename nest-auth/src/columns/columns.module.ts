import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { AuthModule } from "src/auth/auth.module";
import {ColumnsController} from "./columns.controller";
import {Columns} from "./columns.entity";
import {ColumnsService} from "./columns.service";
import {IsColumnOwnerGuard} from "./is-column-owner.guard";

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([Columns]),
  ],
  controllers: [ColumnsController],
  providers: [ColumnsService, IsColumnOwnerGuard],
  exports: [ColumnsService]
})
export class ColumnsModule {}
