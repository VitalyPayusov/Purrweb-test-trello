import {CanActivate, ExecutionContext} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Cards} from "./cards.entity";

export class IsCardOwnerGuard implements CanActivate {
  constructor(
    @InjectRepository(Cards) private readonly cardsRepository: Repository<Cards>,
  ) {
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const { user: { id: userId }, params: { id } } = req;

    const card = await this.cardsRepository.findOne(id, {
      relations: ['columns'],
    });

    return card.column.userId === userId;
  }
}
