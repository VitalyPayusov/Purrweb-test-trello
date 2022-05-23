import { UsersService } from "../users/users.service";
import { Users } from "../users/users.entity";
import { JwtService } from "@nestjs/jwt";
import { SignInUserDto } from "src/users/dto/signin.user.dto";
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signUp(dto: SignInUserDto): Promise<{
        access_token: string;
    }>;
    validateUser(dto: SignInUserDto): Promise<Users>;
    login(dto: SignInUserDto): Promise<{
        access_token: string;
    }>;
    token(user: Users): Promise<{
        access_token: string;
    }>;
}
