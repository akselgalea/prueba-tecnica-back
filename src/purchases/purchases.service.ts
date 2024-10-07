import { Injectable, NotImplementedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Purchase } from "./entities/purchase.entity";
import { Repository } from "typeorm";
import { CreatePurchaseDto } from "./dto/create-purchase.dto";

@Injectable()
export class PurchasesService {
	constructor(
		@InjectRepository(Purchase)
		private purchaseRepository: Repository<Purchase>,
	) {}

	findAll(): Promise<Purchase[]> {
		return this.purchaseRepository.find();
	}

	findOne(id: number): Promise<Purchase> {
		return this.purchaseRepository.findOne({
			where: {
				id,
			},
			relations: {
				user: true,
				products: true,
			},
		});
	}

	create(input: CreatePurchaseDto) {
		console.log(input);
		throw new NotImplementedException();
		// return this.purchaseRepository.save
	}
}
