import {BadRequestException, Injectable} from "@nestjs/common";
import {FindConditions, In, Repository} from "typeorm";
import {Cards} from "./cards.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {CardDto} from "./dto/cards.dto";
import {Columns} from "../columns/columns.entity";
import { UpdateCardDto } from "./dto/update.cards.dto";

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Cards) private readonly cardsRepository: Repository<Cards>,
    @InjectRepository(Columns) private readonly columnsRepository: Repository<Columns>,
  ) {
  }

  async createCard(dto: CardDto): Promise<Cards> {
    const card = this.cardsRepository.create(dto);
    await this.cardsRepository.save(card);
    console.log(dto)
    console.log(card)

    return card;
  }

  async getCard(id: number): Promise<Cards> {
    return await this.cardsRepository.findOne({id});
    
}

  async getCards(columnId?: number, userId?: number): Promise<Cards[]> {
    try {
      const where: FindConditions<Cards> = {};

      if (!columnId && userId) {
        const columns = await this.columnsRepository.find({ userId });
        where.columnId = In(columns.map(col => col.id));
      } else if (columnId) {
        where.columnId = columnId;
      } else {
        throw new BadRequestException();
      }

      const cards = await this.cardsRepository.find({ where });
      return cards;
    } catch (e) {
      throw new BadRequestException('Cards not found')
    }
  }

  async updateCard(id: any, dto: UpdateCardDto): Promise<Cards> {
    const card = await this.getCard(id);
    console.log(id)
    console.log(dto)
    console.log(id)
    return this.cardsRepository.save({...card, ...dto});
  }

  async deleteCard(id: number): Promise<Cards> {
    const card = await this.getCard(id)
    return await this.cardsRepository.remove(card);
  }

}
