import { AuthService } from "./auth.service";
import { SignInUserDto } from "src/users/dto/signin.user.dto";
import { UsersService } from "src/users/users.service";
export declare class AuthController {
    private readonly authService;
    private usersService;
    constructor(authService: AuthService, usersService: UsersService);
    login(dto: SignInUserDto): Promise<{
        access_token: string;
    }>;
    signUp(dto: SignInUserDto): Promise<{
        access_token: string;
    }>;
}
