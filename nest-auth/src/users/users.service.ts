import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {Users} from "./users.entity";
import {InjectRepository} from "@nestjs/typeorm";
import { UserDto } from "src/users/dto/users.dto";
import { UpdateUserDto } from "./dto/update.users.dto";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private usersRepository: Repository<Users>) {
  }

  async createUser(dto: UserDto): Promise<Users> {
    const user = this.usersRepository.create(dto);
    await this.usersRepository.save(user);
    return await this.userEmail(user.email);
}

  async getUser(id: number): Promise<Users> {
      const user = await this.usersRepository.findOne(id);
      return user;
  }

  getUsers(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  async updateUser(id: any, dto: UpdateUserDto): Promise<Users> {
    const user = await this.getUser(id)
    return this.usersRepository.save({...user, ...dto});
  }

  async deleteUser(id: any): Promise<Users> {
    return await this.usersRepository.remove(await this.usersRepository.findOne(id));
  }

  //  findOne(condition: any): Promise<Users> {
  //    return this.usersRepository.findOne(condition);
  //  }

   async userEmail(email: string): Promise<Users> {
    return await this.usersRepository.findOne({ where: { email } })
}

}
