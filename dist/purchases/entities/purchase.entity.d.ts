import { Product } from "src/products/entities/product.entity";
import { User } from "src/users/entities/user.entity";
export declare class Purchase {
    id: number;
    contactNumber: string;
    address: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    user: User;
    products: Product[];
}
