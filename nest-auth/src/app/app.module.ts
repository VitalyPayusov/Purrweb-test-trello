import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from "../auth/auth.module";
import { UsersModule } from "../users/users.module";
import { ColumnsModule } from 'src/columns/columns.module';
import { CardsModule } from 'src/cards/cards.module';
import { CommentsModule } from 'src/comments/comments.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    UsersModule,
    ColumnsModule,
    AuthModule,
    CardsModule,
    CommentsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'host',
      port: 3306,
      username: 'username',
      password: 'password',
      database: 'database',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
})
export class AppModule {

}

