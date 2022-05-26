import { Repository } from "typeorm";
import { Cards } from "./cards.entity";
import { CardDto } from "./dto/cards.dto";
import { Columns } from "../columns/columns.entity";
import { UpdateCardDto } from "./dto/update.cards.dto";
export declare class CardsService {
    private readonly cardsRepository;
    private readonly columnsRepository;
    constructor(cardsRepository: Repository<Cards>, columnsRepository: Repository<Columns>);
    createCard(dto: CardDto): Promise<Cards>;
    getCard(id: number): Promise<Cards>;
    getCards(columnId?: number, userId?: number): Promise<Cards[]>;
    updateCard(id: any, dto: UpdateCardDto): Promise<Cards>;
    deleteCard(id: number): Promise<Cards>;
}
