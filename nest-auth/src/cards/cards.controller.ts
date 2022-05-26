import {
  Controller,
  UseGuards,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Patch,
  Delete,
  Query
} from "@nestjs/common";
import {CardsService} from "./cards.service";
import {JwtAuthGuard} from "../auth/guards/jwt.guard";
import {Cards} from "./cards.entity";
import {ApiBearerAuth, ApiForbiddenResponse, ApiNotFoundResponse, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import { CardDto } from "./dto/cards.dto";
import {User} from "../users/decorator";
import {Users} from "../users/users.entity";
import { UpdateCardDto } from "./dto/update.cards.dto";

@ApiTags('Cards')
@Controller('cards')
@ApiBearerAuth('access_token')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {
  }

  @Post()
  @ApiOperation({summary: 'Create card'})
  @ApiResponse({status: 201, type: Cards})
  @ApiNotFoundResponse({description: 'Not found'})
  @UseGuards(JwtAuthGuard)
  async create(@Body() dto: CardDto) {
    return this.cardsService.createCard(dto);
  }

  @Get(':id')
  @ApiOperation({summary: 'Get card'})
  @ApiResponse({status: 200, type: Cards})
  @ApiNotFoundResponse({description: 'Not found'})
  @UseGuards(JwtAuthGuard)
  async getCard(@Param('id', ParseIntPipe) id: number) {
    return await this.cardsService.getCard(id);
  }

  @Get()
  @ApiOperation({summary: 'Get cards'})
  @ApiResponse({status: 200, type: Cards})
  @ApiNotFoundResponse({description: 'Not found'})
  @UseGuards(JwtAuthGuard)
  async getCards(@Query('columnId', ParseIntPipe) columnId?: number, @User() user?: Users) {
    return this.cardsService.getCards(columnId, user?.id);
  }

  @Patch(':id')
  @ApiOperation({summary: 'Update card'})
  @ApiResponse({status: 200, type: Cards})
  @ApiNotFoundResponse({description: 'Not found'})
  @ApiForbiddenResponse({description: 'Forbidden'})
  @UseGuards(JwtAuthGuard)
  async updateCard(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateCardDto) {
    console.log(id)
    console.log(dto)
    return this.cardsService.updateCard(id, dto);
  }

  @Delete(':id')
  @ApiOperation({summary: 'Delete card'})
  @ApiResponse({status: 200, type: Cards})
  @ApiNotFoundResponse({description: 'Not found'})
  @ApiForbiddenResponse({description: 'Forbidden'})
  @UseGuards(JwtAuthGuard)
  async deleteCard(@Param('id', ParseIntPipe) id: number) {
    return await this.cardsService.deleteCard(id);
  }
}
