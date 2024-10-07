import { PURCHASE_PRODUCTS_TABLE_NAME } from "src/purchases/entities/purchase-product.entity";
import { Purchase } from "src/purchases/entities/purchase.entity";
import { Store } from "src/stores/entities/store.entity";
import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	ManyToMany,
	JoinTable,
	DeleteDateColumn,
	UpdateDateColumn,
	CreateDateColumn,
} from "typeorm";

@Entity()
export class Product {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	price: number;

	@Column()
	image: string;

	@CreateDateColumn({ nullable: true })
	created_at: Date;

	@UpdateDateColumn({ nullable: true })
	updated_at: Date;

	@DeleteDateColumn({ nullable: true })
	deleted_at: Date;

	@ManyToOne(
		() => Store,
		(store) => store.products,
	)
	store: Store;

	@ManyToMany(() => Purchase)
	@JoinTable({ name: PURCHASE_PRODUCTS_TABLE_NAME })
	purchases: Purchase[];
}
