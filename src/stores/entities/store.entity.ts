import { Product } from "src/products/entities/product.entity";
import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
	OneToMany,
} from "typeorm";

@Entity()
export class Store {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@CreateDateColumn({ nullable: true })
	created_at: Date;

	@UpdateDateColumn({ nullable: true })
	updated_at: Date;

	@DeleteDateColumn({ nullable: true })
	deleted_at: Date;

	@OneToMany(
		() => Product,
		(prod) => prod.store,
	)
	products: Product[];
}
