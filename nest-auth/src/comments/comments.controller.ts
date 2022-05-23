import {Controller, UseGuards, Get, Param, Post, Body, Patch, Delete, BadRequestException} from "@nestjs/common";
import {CommentsService} from "./comments.service";
import {JwtAuthGuard} from "../auth/guards/jwt.guard";
import {Comments} from "./comments.entity";
import {ApiForbiddenResponse, ApiNotFoundResponse, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import { AccessGuard } from "src/auth/guards/acess.guard";
import { UserId } from "src/users/decorator";
import { ColumnsService } from "src/columns/columns.service";
import { CardsService } from "src/cards/cards.service";
import { UsersService } from "src/users/users.service";

@ApiTags('Comments')
@Controller('users')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService,
    private columnsService: ColumnsService,
    private cardsService: CardsService,
    private usersService: UsersService) {
  }

  @Post('columns/:columnId/cards/:cardId/comments')
  @ApiOperation({summary: 'Create comment'})
  @ApiResponse({status: 201, type: Comments})
  @ApiNotFoundResponse({description: 'Not found'})
  @UseGuards(JwtAuthGuard, AccessGuard)
  async createComment(@Body("text") text: string, @UserId() userId: number, 
  @Param('columnId') columnId: number, @Param('cardId') cardId: number) {
  const column = await this.columnsService.getColumn(columnId);
  if( !column ){
      throw new BadRequestException('Column not found');
  }
  const card = await this.cardsService.getCard(cardId);
  if( !card ){
      throw new BadRequestException('Card not found')
  }
  return await this.commentsService.createComment(text, userId, columnId);
}

  @Get(':userId/columns/:columnId/cards/:cardId/comments')
  @ApiOperation({summary: 'Get comment'})
  @ApiResponse({status: 200, type: Comments})
  @ApiNotFoundResponse({description: 'Not found'})
  @UseGuards(JwtAuthGuard, AccessGuard)
  async getComment(@Param('userId') userId: number, @Param('columnId') columnId: number, 
    @Param('cardId') cardId: number,
) {
    const user = await this.usersService.getUser(userId);
    if ( !user ){
        throw new BadRequestException('User not found')
    }
    const column = await this.columnsService.getColumn(columnId);
    if( !column ){
        throw new BadRequestException('Column not found');
    }
    const card = await this.cardsService.getCard(cardId);
    if( !card ){
        throw new BadRequestException('Card not found')
    }
    return await this.commentsService.getComments(cardId);
}
    
  @Delete('columns/:columnId/cards/:cardId/comments/:commentId')
  @ApiOperation({summary: 'Delete comment'})
  @ApiResponse({status: 200, type: Comments})
  @ApiNotFoundResponse({description: 'Not found'})
  @ApiForbiddenResponse({description: 'Forbidden'})
  @UseGuards(JwtAuthGuard, AccessGuard)
  async deleteComment(@Param('columnId') columnId: number, @Param('cardId') cardId: number,
    @Param('commentId') commentId: number) {
    const column = await this.columnsService.getColumn(columnId);
    if( !column ){
        throw new BadRequestException('Column not found');
    }
    const card = await this.cardsService.getCard(cardId);
    if( !card ){
        throw new BadRequestException('Card not found')
    }
    return await this.commentsService.deleteComment(commentId);
}
}
