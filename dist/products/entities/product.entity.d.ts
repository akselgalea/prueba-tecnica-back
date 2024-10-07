import { Purchase } from "src/purchases/entities/purchase.entity";
import { Store } from "src/stores/entities/store.entity";
export declare class Product {
    id: number;
    name: string;
    price: number;
    image: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    store: Store;
    purchases: Purchase[];
}
