import { Column, Entity, JoinTable, OneToOne, PrimaryColumn } from "typeorm";
import { Purchase } from "./purchase.entity";
import { Product } from "src/products/entities/product.entity";

export const PURCHASE_PRODUCTS_TABLE_NAME = "purchase_products";

@Entity(PURCHASE_PRODUCTS_TABLE_NAME)
export class PurchaseProduct {
	@Column()
	@PrimaryColumn()
	purchaseId: number;

	@Column()
	@PrimaryColumn()
	productId: number;

	@Column()
	unitPrice: number;

	@Column()
	quantity: number;

	@Column()
	total: number;

	@OneToOne(() => Purchase)
	@JoinTable()
	purchase: Purchase;

	@OneToOne(() => Product)
	@JoinTable()
	product: Product;
}
