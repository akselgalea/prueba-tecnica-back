import { Product } from "src/products/entities/product.entity";
import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	JoinTable,
	ManyToMany,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import { PURCHASE_PRODUCTS_TABLE_NAME } from "./purchase-product.entity";
import { User } from "src/users/entities/user.entity";

@Entity()
export class Purchase {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	contactNumber: string;

	@Column()
	address: string;

	@CreateDateColumn({ nullable: true })
	created_at: Date;

	@UpdateDateColumn({ nullable: true })
	updated_at: Date;

	@DeleteDateColumn({ nullable: true })
	deleted_at: Date;

	@ManyToOne(
		() => User,
		(user) => user.purchases,
	)
	user: User;

	@ManyToMany(() => Product)
	@JoinTable({ name: PURCHASE_PRODUCTS_TABLE_NAME })
	products: Product[];
}
