import { Repository } from "typeorm";
import { Comments } from "./comments.entity";
export declare class CommentsService {
    private readonly commentsService;
    commentsRepository: any;
    constructor(commentsService: Repository<Comments>);
    createComment(text: string, userId: number, cardId: number): Promise<Comments>;
    getComments(cardId: number): Promise<Comments[]>;
    deleteComment(id: number): Promise<Comments>;
}
