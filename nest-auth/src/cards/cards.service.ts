import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {Cards} from "./cards.entity";
import {InjectRepository} from "@nestjs/typeorm";
import { CardDto } from "./dto/cards.dto";

@Injectable()
export class CardsService {
  constructor(@InjectRepository(Cards) private readonly cardsService: Repository<Cards>) {
  }

  async createCard(dto: CardDto, columnId: number): Promise<Cards> {
    const obj = {
        name: dto.name,
        description: dto.description,
        result: dto.result,
        columnId: columnId,
    }
    const card = this.cardsService.create(obj);
    return card;
}

  async getCard(id: number): Promise<Cards> {
    const card = await  this.cardsService.findOne({where: {cardId: id}});
      return card;
    }

  async getCards(id: number): Promise<Cards[]> {
    const card = await this.cardsService.find({where: {columnId: id}});
    return card;
}

  async updateCard(id: any, dto: CardDto): Promise<Cards> {
    return await this.cardsService.save({...dto, ...{where: {cardId: id}}});
  }

  async deleteCard(id: number): Promise<Cards> {
      return await this.cardsService.remove(await this.cardsService.findOne(id));
    }


  findOne(condition: any): Promise<Cards> {
    return this.cardsService.findOne(condition);
  }

}
