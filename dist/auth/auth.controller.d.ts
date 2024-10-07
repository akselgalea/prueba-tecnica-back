import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: LoginDto): Promise<{
        access_token: string;
        user: {
            username: string;
            name: string;
            roles: import("../roles/entities/role.entity").Role[];
            email: string;
        };
    }>;
    register(body: RegisterDto): Promise<{
        access_token: string;
        user: {
            username: string;
            name: string;
            roles: import("../roles/entities/role.entity").Role[];
            email: string;
        };
    }>;
}
