import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { AuthModule } from "src/auth/auth.module";
import { CardsModule } from "src/cards/cards.module";
import { ColumnsModule } from "src/columns/columns.module";
import { UsersModule } from "src/users/users.module";
import {CommentsController} from "./comments.controller";
import {Comments} from "./comments.entity";
import {CommentsService} from "./comments.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Comments]),
    UsersModule,
    ColumnsModule,
    CardsModule,
    AuthModule,
  ],
  controllers : [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
