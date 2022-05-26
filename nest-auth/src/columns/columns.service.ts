import {BadRequestException, Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {Columns} from "./columns.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {ColumnDto} from "src/columns/dto/columns.dto";

@Injectable()
export class ColumnsService {
  constructor(@InjectRepository(Columns) private readonly columnsRepository: Repository<Columns>) {
  }

  async createColumn(userId: number, dto: ColumnDto) {
    const obj = {
      name: dto.name,
      userId,
    }

    const column = this.columnsRepository.create(obj);
    await this.columnsRepository.save(column);
    return column;
  }

  async getColumn(id: number): Promise<Columns> {
    try {
      const column = await this.columnsRepository.findOne({where: {id: id}});
      return column;
    } catch (e) {
      throw new BadRequestException('Column not found')
    }
  }

  async getColumns(userId: number): Promise<Columns[]> {
    try {
      const columns = await this.columnsRepository.find({where: {userId: userId}});
      return columns;
    } catch (e) {
      throw new BadRequestException('Columns not found')
    }
  }

  async updateColumn(id: number, dto: ColumnDto): Promise<Columns> {
    const column = await this.getColumn(id);
    return this.columnsRepository.save({...column, ...dto});
  }

  async deleteColumn(id: number): Promise<Columns> {
    const column = await this.getColumn(id);
    return await this.columnsRepository.remove(column);
  }

}
