import { CardsService } from "./cards.service";
import { Cards } from "./cards.entity";
import { CardDto } from "./dto/cards.dto";
import { ColumnsService } from "src/columns/columns.service";
import { UsersService } from "src/users/users.service";
export declare class CardsController {
    private readonly cardsService;
    private columnsService;
    private usersService;
    columnService: any;
    userService: any;
    constructor(cardsService: CardsService, columnsService: ColumnsService, usersService: UsersService);
    createCard(dto: CardDto, columnId: number): Promise<Cards>;
    getCards(userId: number, columnId: number): Promise<Cards[]>;
    getCard(userId: number, columnId: number, cardId: number): Promise<Cards>;
    updateCard(columnId: number, cardId: number | any, dto: CardDto | any): Promise<Cards>;
    deleteCard(columnId: number, cardId: number): Promise<Cards>;
}
