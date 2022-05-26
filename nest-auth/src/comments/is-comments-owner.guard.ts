import { CanActivate, ExecutionContext } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Comments } from "./comments.entity";

export class IsCommentOwnerGuard implements CanActivate {
    constructor(@InjectRepository(Comments) private readonly commentsRepository: Repository<Comments>) {
    }
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const req = context.switchToHttp().getRequest();
        const { user: { id: userId }, params: { id } } = req;
    
        const comment = await this.commentsRepository.findOne(id, {
          relations: ['card'],
        });
    
        return comment.card.column.userId === userId;
      }
    }
  