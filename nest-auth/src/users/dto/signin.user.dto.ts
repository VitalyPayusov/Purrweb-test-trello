import { PickType } from "@nestjs/swagger";
import { UserDto } from "src/users/dto/users.dto";

export class SignInUserDto extends PickType(UserDto, ['email', 'password'] as const) {}