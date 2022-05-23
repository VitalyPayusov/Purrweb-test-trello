import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {Comments} from "./comments.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class CommentsService {
  commentsRepository: any;
  constructor(@InjectRepository(Comments) private readonly commentsService: Repository<Comments>) {
    }
  
    async createComment(text: string, userId: number, cardId: number): Promise<Comments> {
      const obj = {
          text: text,
          userId: userId,
          cardId: cardId,
      }
      return this.commentsService.create(obj);
    }
  
    async getComments(cardId: number): Promise<Comments[]> {
      return await this.commentsService.find({where: {cardId: cardId}});
  }
  
    async deleteComment(id: number): Promise<Comments> {
      return await this.commentsRepository.destroy({where: {comment_id: id}});
    }
}
