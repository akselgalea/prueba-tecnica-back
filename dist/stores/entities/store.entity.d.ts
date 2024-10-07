import { Product } from "src/products/entities/product.entity";
export declare class Store {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    products: Product[];
}
