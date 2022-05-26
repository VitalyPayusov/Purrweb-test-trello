import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {Comments} from "./comments.entity";
import {InjectRepository} from "@nestjs/typeorm";
import { CommentDto } from "./dto/comments.dto";
import { UpdateCommentDto } from "./dto/update.comments.dto";


@Injectable()
export class CommentsService {
  constructor(@InjectRepository(Comments) private readonly commentsRepository: Repository<Comments>) {
    }
  
    async createComment(dto: CommentDto): Promise<Comments> {
      const comment = this.commentsRepository.create(dto);
      await this.commentsRepository.save(comment);
      console.log(dto)
      console.log(comment)
  
      return comment;
    }
  
    async getComment(id: number): Promise<Comments> {
      return await this.commentsRepository.findOne({id});
      
  }
  
    async getComments(cardId?: number): Promise<Comments[]> {
      console.log('service cardId - ', cardId)
      return await this.commentsRepository.find({ where: {
        card: {
            id: cardId
        }
    } });
    }
  
    async updateComment(id: any, dto: UpdateCommentDto): Promise<Comments> {
      const comment = await this.getComment(id);
      console.log(id)
      console.log(dto)
      console.log(id)
      return this.commentsRepository.save({...comment, ...dto});
    }
  
    async deleteComment(id: number): Promise<Comments> {
      const comment = await this.getComment(id)
      return await this.commentsRepository.remove(comment);
    }
  
}
