import { Repository } from "typeorm";
import { Comments } from "./comments.entity";
import { CommentDto } from "./dto/comments.dto";
import { UpdateCommentDto } from "./dto/update.comments.dto";
export declare class CommentsService {
    private readonly commentsRepository;
    constructor(commentsRepository: Repository<Comments>);
    createComment(dto: CommentDto): Promise<Comments>;
    getComment(id: number): Promise<Comments>;
    getComments(cardId?: number): Promise<Comments[]>;
    updateComment(id: any, dto: UpdateCommentDto): Promise<Comments>;
    deleteComment(id: number): Promise<Comments>;
}
