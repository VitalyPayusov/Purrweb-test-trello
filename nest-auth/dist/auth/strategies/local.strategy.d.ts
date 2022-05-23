import { Strategy } from "passport-local";
import { SignInUserDto } from "src/users/dto/signin.user.dto";
import { Users } from "src/users/users.entity";
import { AuthService } from "../auth.service";
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(dto: SignInUserDto): Promise<Users>;
}
export {};
