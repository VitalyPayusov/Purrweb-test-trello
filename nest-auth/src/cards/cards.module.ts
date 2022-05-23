import {Global, Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { AuthModule } from "src/auth/auth.module";
import { ColumnsModule } from "src/columns/columns.module";
import { UsersModule } from "src/users/users.module";
import {CardsController} from "./cards.controller";
import {Cards} from "./cards.entity";
import {CardsService} from "./cards.service";

@Module({
  imports: [
    UsersModule,
    ColumnsModule,
    AuthModule,
    TypeOrmModule.forFeature([Cards]),
  ],
  controllers: [CardsController],
  providers: [CardsService],
  exports: [CardsService]
})
export class CardsModule {}
