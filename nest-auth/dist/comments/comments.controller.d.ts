import { CommentsService } from "./comments.service";
import { Comments } from "./comments.entity";
import { ColumnsService } from "src/columns/columns.service";
import { CardsService } from "src/cards/cards.service";
import { UsersService } from "src/users/users.service";
export declare class CommentsController {
    private readonly commentsService;
    private columnsService;
    private cardsService;
    private usersService;
    constructor(commentsService: CommentsService, columnsService: ColumnsService, cardsService: CardsService, usersService: UsersService);
    createComment(text: string, userId: number, columnId: number, cardId: number): Promise<Comments>;
    getComment(userId: number, columnId: number, cardId: number): Promise<Comments[]>;
    deleteComment(columnId: number, cardId: number, commentId: number): Promise<Comments>;
}
