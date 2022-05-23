import { Repository } from "typeorm";
import { Cards } from "./cards.entity";
import { CardDto } from "./dto/cards.dto";
export declare class CardsService {
    private readonly cardsService;
    constructor(cardsService: Repository<Cards>);
    createCard(dto: CardDto, columnId: number): Promise<Cards>;
    getCard(id: number): Promise<Cards>;
    getCards(id: number): Promise<Cards[]>;
    updateCard(id: any, dto: CardDto): Promise<Cards>;
    deleteCard(id: number): Promise<Cards>;
    findOne(condition: any): Promise<Cards>;
}
