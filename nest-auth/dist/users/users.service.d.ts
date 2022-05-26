import { Repository } from "typeorm";
import { Users } from "./users.entity";
import { UserDto } from "src/users/dto/users.dto";
import { UpdateUserDto } from "./dto/update.users.dto";
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<Users>);
    createUser(dto: UserDto): Promise<Users>;
    getUser(id: number): Promise<Users>;
    getUsers(): Promise<Users[]>;
    updateUser(id: any, dto: UpdateUserDto): Promise<Users>;
    deleteUser(id: any): Promise<Users>;
    userEmail(email: string): Promise<Users>;
}
