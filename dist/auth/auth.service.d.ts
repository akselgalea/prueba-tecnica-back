import { UsersService } from "src/users/users.service";
import { JwtService } from "@nestjs/jwt";
import { RegisterDto } from "./dto/register.dto";
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    login(emailOrUsername: string, pass: string): Promise<{
        access_token: string;
        user: {
            username: string;
            name: string;
            roles: import("../roles/entities/role.entity").Role[];
            email: string;
        };
    }>;
    register(data: RegisterDto): Promise<{
        access_token: string;
        user: {
            username: string;
            name: string;
            roles: import("../roles/entities/role.entity").Role[];
            email: string;
        };
    }>;
}
