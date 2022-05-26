import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Repository } from "typeorm";
import { Comments } from "./comments.entity";
export declare class IsCommentOwnerGuard implements CanActivate {
    private readonly commentsRepository;
    constructor(commentsRepository: Repository<Comments>);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
