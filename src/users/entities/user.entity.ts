import { Purchase } from "src/purchases/entities/purchase.entity";
import { Role } from "src/roles/entities/role.entity";
import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
	ManyToMany,
	JoinTable,
	ManyToOne,
} from "typeorm";

@Entity()
export class User {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({
		length: 50,
		unique: true,
	})
	username: string;

	@Column("varchar", {
		length: 120,
	})
	password: string;

	@Column({
		unique: true,
	})
	email: string;

	@Column({ length: 70 })
	name: string;

	@CreateDateColumn({ nullable: true })
	created_at: Date;

	@UpdateDateColumn({ nullable: true })
	updated_at: Date;

	@DeleteDateColumn({ nullable: true })
	deleted_at: Date;

	@ManyToOne(
		() => Purchase,
		(purchase) => purchase.user,
	)
	purchases: Purchase[];

	@ManyToMany(() => Role)
	@JoinTable()
	roles: Role[];
}
