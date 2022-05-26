import {forwardRef, Module} from "@nestjs/common";
import {JwtModule} from "@nestjs/jwt";
import {UsersModule} from "../users/users.module";
import {AuthService} from "./auth.service";
import {LocalStrategy} from "./strategies/local.strategy";
import {LocalAuthGuard} from "./guards/local.guard";
import {JwtAuthGuard} from "./guards/jwt.guard";
import {JwtStrategy} from "./strategies/jwt.strategy";
import { PassportModule } from "@nestjs/passport";
import { jwtConstants } from "./constants";
import { AuthController } from "./auth.controller";
import { AccessGuard } from "./guards/acess.guard";


@Module({
  imports: [
    PassportModule,
    forwardRef(() => UsersModule),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '1d'}
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, LocalAuthGuard, JwtAuthGuard, AccessGuard, JwtStrategy],
  exports: [JwtModule],
})
export class AuthModule {}
