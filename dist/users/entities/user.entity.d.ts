import { Purchase } from "src/purchases/entities/purchase.entity";
import { Role } from "src/roles/entities/role.entity";
export declare class User {
    id: string;
    username: string;
    password: string;
    email: string;
    name: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    purchases: Purchase[];
    roles: Role[];
}
