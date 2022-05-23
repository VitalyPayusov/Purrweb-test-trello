import {Controller, UseGuards, Get, Param, ParseIntPipe, Delete, Post, Body, Patch, BadRequestException} from "@nestjs/common";
import {ColumnsService} from "./columns.service";
import {JwtAuthGuard} from "../auth/guards/jwt.guard";
import {Columns} from "./columns.entity";
import {ApiForbiddenResponse, ApiNotFoundResponse, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import { ColumnDto } from "src/columns/dto/columns.dto";
import { AccessGuard } from "src/auth/guards/acess.guard";
import { UsersService } from "src/users/users.service";
import { UserId } from "src/users/decorator";

@ApiTags('Columns')
@Controller('users')
export class ColumnsController {
  constructor(private readonly columnsService: ColumnsService,
    private usersService: UsersService) {
  }

  @Post('columns')
  @ApiOperation({summary: 'Create column'})
  @ApiResponse({status: 201, type: Columns})
  @ApiNotFoundResponse({description: 'Not found'})
  @UseGuards(JwtAuthGuard, AccessGuard)
  async create(@Body() dto: ColumnDto, @UserId('userId') userId) {
    return await this.columnsService.createColumn(dto, userId)
}

  @Get(':userId/columns/:columnId')
  @ApiOperation({summary: 'Get column'})
  @ApiResponse({status: 200, type: Columns})
  @ApiNotFoundResponse({description: 'Not found'})
  @UseGuards(JwtAuthGuard, AccessGuard)
  async getColumn(@Param('userId') userId: number, @Param('columnId') columnId: number) {
    const user = await this.usersService.getUser(userId);
    if ( !user ) {
        throw new BadRequestException('User not found');
    } 
    return await this.columnsService.getColumn(columnId);
}

  @Get(':userId/columns')
  @ApiOperation({summary: 'Get columns'})
  @ApiResponse({status: 200, type: Columns})
  @ApiNotFoundResponse({description: 'Not found'})
  @UseGuards(JwtAuthGuard, AccessGuard)
  async getColumns(@Param('userId') userId: number) {
    const user = await this.usersService.getUser(userId)
    if( !user ) {
      throw new BadRequestException('User not found');
  }
    return this.columnsService.getColumns(userId);
  }
    
  @Patch('columns/:columnId')
  @ApiOperation({summary: 'Update column'})
  @ApiResponse({status: 200, type: Columns})
  @ApiNotFoundResponse({description: 'Not found'})
  @ApiForbiddenResponse({description: 'Forbidden'})
  @UseGuards(JwtAuthGuard, AccessGuard)
  async updateColumn(@Param('userId') userId: number, @Param('columnId') columnId: any, @Body() dto: ColumnDto){
    const user = await this.usersService.getUser(userId);
    if ( !user ) {
        throw new BadRequestException('User not found');
    } 
    return await this.columnsService.updateColumn(dto, columnId);
}
    
  @Delete('columns/:columnId')
  @ApiOperation({summary: 'Delete column'})
  @ApiResponse({status: 200, type: Columns})
  @ApiNotFoundResponse({description: 'Not found'})
  @ApiForbiddenResponse({description: 'Forbidden'})
  @UseGuards(JwtAuthGuard, AccessGuard)
  async deleteColumn(@Param('userId') userId: number, @Param('columnId') columnId: any, @Body() dto: ColumnDto){
    const user = await this.usersService.getUser(userId);
    if ( !user ) {
        throw new BadRequestException('User not found');
    } 
    return await this.columnsService.updateColumn(dto, columnId);
}

}
