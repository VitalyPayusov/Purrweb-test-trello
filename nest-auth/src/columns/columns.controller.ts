import {
  Controller,
  UseGuards,
  Get,
  Param,
  ParseIntPipe,
  Delete,
  Post,
  Body,
  Patch,
} from "@nestjs/common";
import {ColumnsService} from "./columns.service";
import {JwtAuthGuard} from "../auth/guards/jwt.guard";
import {Columns} from "./columns.entity";
import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
  ApiTags
} from "@nestjs/swagger";
import {ColumnDto} from "src/columns/dto/columns.dto";
import {User} from "src/users/decorator";
import {Users} from "../users/users.entity";
import {IsColumnOwnerGuard} from "./is-column-owner.guard";

@ApiTags('Columns')
@Controller('columns')
@ApiBearerAuth('access_token')
export class ColumnsController {
  constructor(private readonly columnsService: ColumnsService) {
  }

  @Post()
  @ApiOperation({summary: 'Create column'})
  @ApiResponse({status: 201, type: Columns})
  @ApiNotFoundResponse({description: 'Not found'})
  @UseGuards(JwtAuthGuard)
  async createColumn(@Body() dto: ColumnDto, @User() userId: Users) {
    return this.columnsService.createColumn(userId.id, dto);
  }

  @Get(':id')
  @ApiOperation({summary: 'Get column'})
  @ApiResponse({status: 200, type: Columns})
  @ApiNotFoundResponse({description: 'Not found'})
  @UseGuards(JwtAuthGuard, IsColumnOwnerGuard)
  async getColumn(@Param('id') id: number) {
    return this.columnsService.getColumn(id);
  }

  @Get()
  @ApiOperation({summary: 'Get columns'})
  @ApiResponse({status: 200, type: Columns})
  @ApiNotFoundResponse({description: 'Not found'})
  @UseGuards(JwtAuthGuard)
  async getColumns(@User() user: Users) {
    return this.columnsService.getColumns(user.id);
  }

  @Patch(':id')
  @ApiOperation({summary: 'Update column'})
  @ApiResponse({status: 200, type: Columns})
  @ApiNotFoundResponse({description: 'Not found'})
  @ApiForbiddenResponse({description: 'Forbidden'})
  @UseGuards(JwtAuthGuard, IsColumnOwnerGuard)
  async updateColumn(@Param('id') id: number, @Body() dto: ColumnDto) {
    return this.columnsService.updateColumn(id, dto);
  }

  @Delete(':id')
  @ApiOperation({summary: 'Delete column'})
  @ApiResponse({status: 200, type: Columns})
  @ApiNotFoundResponse({description: 'Not found'})
  @ApiForbiddenResponse({description: 'Forbidden'})
  @UseGuards(JwtAuthGuard, IsColumnOwnerGuard)
  async deleteColumn(@Param('id') id: number) {
    return await this.columnsService.deleteColumn(id);
  }

}
