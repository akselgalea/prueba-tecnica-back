import { Role } from "src/roles/entities/role.entity";
import { Repository } from "typeorm";
import type { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersService {
    private userRepository;
    private roleRepository;
    constructor(userRepository: Repository<User>, roleRepository: Repository<Role>);
    findAll(): Promise<{
        users: User[];
        totalRows: number;
    }>;
    exists(email: string, username: string): Promise<User>;
    getByEmailOrUsername(input: string): Promise<User>;
    getById(id: string): Promise<User>;
    createUser(user: CreateUserDto): Promise<User>;
    update(id: string, user: UpdateUserDto): Promise<User>;
    delete(id: string): Promise<{
        message: string;
    }>;
}
