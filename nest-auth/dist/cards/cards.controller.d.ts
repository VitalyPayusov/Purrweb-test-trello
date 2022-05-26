import { CardsService } from "./cards.service";
import { Cards } from "./cards.entity";
import { CardDto } from "./dto/cards.dto";
import { Users } from "../users/users.entity";
import { UpdateCardDto } from "./dto/update.cards.dto";
export declare class CardsController {
    private readonly cardsService;
    constructor(cardsService: CardsService);
    create(dto: CardDto): Promise<Cards>;
    getCard(id: number): Promise<Cards>;
    getCards(columnId?: number, user?: Users): Promise<Cards[]>;
    updateCard(id: number, dto: UpdateCardDto): Promise<Cards>;
    deleteCard(id: number): Promise<Cards>;
}
