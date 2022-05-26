import { CommentsService } from "./comments.service";
import { Comments } from "./comments.entity";
import { ColumnsService } from "src/columns/columns.service";
import { UsersService } from "src/users/users.service";
import { Users } from "src/users/users.entity";
import { CommentDto } from "./dto/comments.dto";
import { UpdateCommentDto } from "./dto/update.comments.dto";
export declare class CommentsController {
    private readonly commentsService;
    private columnsService;
    private usersService;
    constructor(commentsService: CommentsService, columnsService: ColumnsService, usersService: UsersService);
    createComment(dto: CommentDto): Promise<Comments>;
    getComment(id: number): Promise<Comments>;
    getComments(cardId?: number, user?: Users): Promise<Comments[]>;
    updateComment(id: number, dto: UpdateCommentDto): Promise<Comments>;
    deleteComment(id: number): Promise<Comments>;
}
