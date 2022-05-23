import {Controller, UseGuards, Get, Param, ParseIntPipe, Delete, Post, Body, Patch} from "@nestjs/common";
import {UsersService} from "./users.service";
import {JwtAuthGuard} from "../auth/guards/jwt.guard";
import {Users} from "./users.entity";
import {ApiNotFoundResponse, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import { UserDto } from "src/users/dto/users.dto";
import { AccessGuard } from "src/auth/guards/acess.guard";

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Post()
  @ApiOperation({summary: 'Create user'})
  @ApiResponse({status: 201, type: Users})
  @UseGuards(JwtAuthGuard, AccessGuard)
  createUser(@Body() dto : UserDto) {
      return this.usersService.createUser(dto);
  }

  @Get('/:id')
  @ApiOperation({summary: 'Get user'})
  @ApiResponse({status: 200, type: Users})
  @ApiNotFoundResponse({description: 'Not found'})
 @UseGuards(JwtAuthGuard, AccessGuard)
  getUser(@Param(':id') id: string) {
    return this.usersService.getUser(id);
  }

  @Get()
  @ApiOperation({summary: 'Get all users'})
  @ApiResponse({status: 200, type: Users})
  @UseGuards(JwtAuthGuard, AccessGuard)
  getAllUsers() {
        return this.usersService.getUsers();
  }

  @Patch('/:id')
  @ApiOperation({summary: 'Update user'})
  @ApiResponse({status: 200, type: Users})
  @ApiNotFoundResponse({description: 'Not found'})
  @UseGuards(JwtAuthGuard, AccessGuard)
  updateUser(@Param('id') id: any, @Body() dto: UserDto) {
        return this.usersService.updateUser(id, dto);
  }
  
  @Delete('/:id')
  @ApiOperation({summary: 'Delete user'})
  @ApiResponse({status: 200, type: Users})
  @ApiNotFoundResponse({description: 'Not found'})
  @UseGuards(JwtAuthGuard, AccessGuard)
  deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.deleteUser(id);
  }

}
