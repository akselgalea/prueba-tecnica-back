import { UsersService } from "./users.service";
import type { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<{
        users: import("./entities/user.entity").User[];
        totalRows: number;
    }>;
    createEncargado(body: CreateUserDto): Promise<import("./entities/user.entity").User>;
    updateUser(body: UpdateUserDto, id: string): Promise<import("./entities/user.entity").User>;
    deleteUser(id: string): Promise<{
        message: string;
    }>;
}
