import {BadRequestException, Injectable} from "@nestjs/common";
import {UsersService} from "../users/users.service";
import {Users} from "../users/users.entity";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import { SignInUserDto } from "src/users/dto/signin.user.dto";


@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {
  }

  async signUp(dto: SignInUserDto) {
    const userAlreadyExist = await this.usersService.getUser(dto.email);

    if (userAlreadyExist) {
        throw new BadRequestException('Email already exists');
    }
      const hashPassword = await bcrypt.hash(dto.password, 5);
      const user = await this.usersService.createUser({...dto, password: hashPassword})
      return this.token(user);
  }

  async validateUser(dto: SignInUserDto): Promise<Users> {
    const user = await this.usersService.userEmail(dto.email);

    if (user && await bcrypt.compare(dto.password, user.password)) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(dto: SignInUserDto) {
    const user = await this.validateUser(dto)

    return this.token(user)
}

  async token(user: Users) {
    const payload = { email: user.email, id: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
