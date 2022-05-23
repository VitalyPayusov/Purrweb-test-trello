import { UserDto } from "src/users/dto/users.dto";
declare const SignInUserDto_base: import("@nestjs/common").Type<Pick<UserDto, "email" | "password">>;
export declare class SignInUserDto extends SignInUserDto_base {
}
export {};
