import {Controller, UseGuards, Get, Param, Post, Body, Patch, Delete, Query, ParseIntPipe} from "@nestjs/common";
import {CommentsService} from "./comments.service";
import {JwtAuthGuard} from "../auth/guards/jwt.guard";
import {Comments} from "./comments.entity";
import {ApiBearerAuth, ApiForbiddenResponse, ApiNotFoundResponse, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import { User } from "src/users/decorator";
import { ColumnsService } from "src/columns/columns.service";
import { UsersService } from "src/users/users.service";
import { Users } from "src/users/users.entity";
import { CommentDto } from "./dto/comments.dto";
import { UpdateCommentDto } from "./dto/update.comments.dto";

@ApiTags('Comments')
@Controller('comments')
@ApiBearerAuth('access_token')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {
  }

  @Post()
  @ApiOperation({summary: 'Create comment'})
  @ApiResponse({status: 201, type: Comments})
  @ApiNotFoundResponse({description: 'Not found'})
  @UseGuards(JwtAuthGuard)
  async createComment(@Body() dto: CommentDto) {
    return this.commentsService.createComment(dto);
  }

  @Get(':id')
  @ApiOperation({summary: 'Get comment'})
  @ApiResponse({status: 200, type: Comments})
  @ApiNotFoundResponse({description: 'Not found'})
  @UseGuards(JwtAuthGuard)
  async getComment(@Param('id', ParseIntPipe) id: number) {
    return await this.commentsService.getComment(id);
  }

  @Get()
  @ApiOperation({summary: 'Get comments'})
  @ApiResponse({status: 200, type: Comments})
  @ApiNotFoundResponse({description: 'Not found'})
  @UseGuards(JwtAuthGuard)
  async getComments(@Query('cardId', ParseIntPipe) cardId?: number, @User() user?: Users) {
    console.log('controller cardId - ', cardId)
    return this.commentsService.getComments(cardId);
  }

  @Patch(':id')
  @ApiOperation({summary: 'Update comment'})
  @ApiResponse({status: 200, type: Comments})
  @ApiNotFoundResponse({description: 'Not found'})
  @ApiForbiddenResponse({description: 'Forbidden'})
  @UseGuards(JwtAuthGuard)
  async updateComment(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateCommentDto) {
    console.log(id)
    console.log(dto)
    return this.commentsService.updateComment(id, dto);
  }

  @Delete(':id')
  @ApiOperation({summary: 'Delete comment'})
  @ApiResponse({status: 200, type: Comments})
  @ApiNotFoundResponse({description: 'Not found'})
  @ApiForbiddenResponse({description: 'Forbidden'})
  @UseGuards(JwtAuthGuard)
  async deleteComment(@Param('id', ParseIntPipe) id: number) {
    return await this.commentsService.deleteComment(id);
  }
}
