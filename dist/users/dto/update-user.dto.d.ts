import { Role } from "src/roles/entities/role.entity";
export declare class UpdateUserDto {
    username: string;
    password: string;
    email: string;
    name: string;
    active?: boolean;
    roles?: number[] | Role[];
}
