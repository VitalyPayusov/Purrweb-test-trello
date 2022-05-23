import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class UserDto {

    @ApiProperty({example: 'example@email.com', description: 'Email'})
    @IsEmail()
    readonly email : string;

    @ApiProperty({example: '1234Abcd.', description: 'Password'})
    @Length(8, 14)
    @IsString()
    readonly password : string;
}