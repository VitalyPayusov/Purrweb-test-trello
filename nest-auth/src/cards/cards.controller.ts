import {Controller, UseGuards, Get, Param, ParseIntPipe, Post, Body, Patch, Delete, BadRequestException} from "@nestjs/common";
import {CardsService} from "./cards.service";
import {JwtAuthGuard} from "../auth/guards/jwt.guard";
import {Cards} from "./cards.entity";
import {ApiForbiddenResponse, ApiNotFoundResponse, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import { CardDto } from "./dto/cards.dto";
import { AccessGuard } from "src/auth/guards/acess.guard";
import { ColumnsService } from "src/columns/columns.service";
import { UsersService } from "src/users/users.service";

@ApiTags('Cards')
@Controller('users')
export class CardsController {
  columnService: any;
  userService: any;
  constructor(private readonly cardsService: CardsService, 
    private columnsService: ColumnsService,
    private usersService: UsersService) {
  }

  @Post('columns/:columnId/cards')
  @ApiOperation({summary: 'Create card'})
  @ApiResponse({status: 201, type: Cards})
  @ApiNotFoundResponse({description: 'Not found'})
  @UseGuards(JwtAuthGuard, AccessGuard)
  async createCard(@Body() dto: CardDto, @Param('columnId') columnId: number){
    const column = await this.columnsService.getColumn(columnId);
    if ( !column ){
        throw new BadRequestException('Column not found');
    }
    return await this.cardsService.createCard(dto, columnId);
}

  @Get(':userId/columns/:columnId/cards')
  @ApiOperation({summary: 'Get card'})
  @ApiResponse({status: 200, type: Cards})
  @ApiNotFoundResponse({description: 'Not found'})
  @UseGuards(JwtAuthGuard, AccessGuard)
  async getCards(@Param('userId') userId: number, @Param('columnId') columnId: number){
    const user = await this.usersService.getUser(userId);
    if( !user ){
        throw new BadRequestException('User not found');
    }
    const column = await this.columnsService.getColumn(columnId);
    if( !column ){
        throw new BadRequestException('Column not found');
    }
    return await this.cardsService.getCards(columnId);
}

  @Get(':userId/columns/:columnId/cards/:cardId')
  @ApiOperation({summary: 'Get cards'})
  @ApiResponse({status: 200, type: Cards})
  @ApiNotFoundResponse({description: 'Not found'})
  @UseGuards(JwtAuthGuard, AccessGuard)
  async getCard(@Param('userId') userId: number, @Param('columnId') columnId: number, @Param('cardId') cardId: number){
    const user = await this.userService.getUser(userId);
    if( !user ){
        throw new BadRequestException('User not found');
    }

    const column = await this.columnsService.getColumn(columnId);
    if( !column ){
        throw new BadRequestException('Column not found');
    }

    const card = await this.cardsService.getCard(cardId);
    if ( !card ){
        throw new BadRequestException('Card not found');
    }

    return card;
}
    
  @Patch('columns/:columnId/cards/:cardId')
  @ApiOperation({summary: 'Update card'})
  @ApiResponse({status: 200, type: Cards})
  @ApiNotFoundResponse({description: 'Not found'})
  @ApiForbiddenResponse({description: 'Forbidden'})
  @UseGuards(JwtAuthGuard, AccessGuard)
  async updateCard(@Param('columnId') columnId: number, @Param('cardId') cardId: number | any, @Body() dto: CardDto | any){
    const column = await this.columnsService.getColumn(columnId);
    if ( !column ){
        throw new BadRequestException('Column not found');
    }
    const card = await this.cardsService.getCard(cardId);
    if ( !card ){
        throw new BadRequestException('Card not found');
    }
    return await this.cardsService.updateCard(dto, cardId);
}
    
  @Delete('columns/:columnId/cards/:cardId')
  @ApiOperation({summary: 'Delete card'})
  @ApiResponse({status: 200, type: Cards})
  @ApiNotFoundResponse({description: 'Not found'})
  @ApiForbiddenResponse({description: 'Forbidden'})
  @UseGuards(JwtAuthGuard, AccessGuard)
  async deleteCard(@Param('columnId') columnId: number, @Param('cardId') cardId: number) {
    const column = await this.columnsService.getColumn(columnId);
    if ( !column ){
        throw new BadRequestException('Column not found');
    }
    const card = await this.cardsService.getCard(cardId);
    if ( !card ){
        throw new BadRequestException('Card not found');
    }
    return await this.cardsService.deleteCard(cardId); 
}
}
