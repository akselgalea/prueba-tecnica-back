import { Purchase } from "./purchase.entity";
import { Product } from "src/products/entities/product.entity";
export declare const PURCHASE_PRODUCTS_TABLE_NAME = "purchase_products";
export declare class PurchaseProduct {
    purchaseId: number;
    productId: number;
    unitPrice: number;
    quantity: number;
    total: number;
    purchase: Purchase;
    product: Product;
}
