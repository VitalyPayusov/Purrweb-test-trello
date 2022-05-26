import {Injectable, UnauthorizedException} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {Strategy} from "passport-local";
import { SignInUserDto } from "src/users/dto/signin.user.dto";
import { Users } from "src/users/users.entity";
import {AuthService} from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(dto: SignInUserDto): Promise<Users> {
    const user = await this.authService.validateUser(dto);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
