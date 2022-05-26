import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { AuthModule } from "src/auth/auth.module";
import {CardsController} from "./cards.controller";
import {Cards} from "./cards.entity";
import {CardsService} from "./cards.service";
import {Columns} from "../columns/columns.entity";
import {IsCardOwnerGuard} from "./is-card-owner.guard";

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([Cards, Columns]),
  ],
  controllers: [CardsController],
  providers: [CardsService, IsCardOwnerGuard],
  exports: [CardsService]
})
export class CardsModule {}
