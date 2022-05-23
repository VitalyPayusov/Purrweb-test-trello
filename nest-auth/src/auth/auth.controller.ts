import {Request, Controller, Post, Body, UseGuards, BadRequestException} from "@nestjs/common";
import {AuthService} from "./auth.service";
import { ApiBadRequestResponse, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { SignInUserDto } from "src/users/dto/signin.user.dto";
import { UsersService } from "src/users/users.service";
import { Users } from "src/users/users.entity";
import { LocalAuthGuard } from "./guards/local.guard";

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private usersService: UsersService) {
  }
  
  //@UseGuards(LocalAuthGuard)
  @Post('sign-in')
  @ApiOperation({summary: 'Sign-in'})
  @ApiResponse({status: 200, type: String})
  @ApiBadRequestResponse({description : 'Failed'})
  async login(@Body() dto: SignInUserDto) {
    const userIsAlready = await this.usersService.getUser(dto.email);
        if (userIsAlready){
            throw new BadRequestException('User is already exits')
        }
    return this.authService.login(dto);
  }

  @Post('sign-up')
  @ApiOperation({summary: 'Sign-up'})
  @ApiResponse({status: 200, type: String})
  @ApiBadRequestResponse({description : 'Failed'})
  signUp(@Body() dto: SignInUserDto) {
    return this.authService.signUp(dto)
  } 
}
