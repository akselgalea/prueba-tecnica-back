import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Store } from "./entities/store.entity";

@Injectable()
export class StoresService {
	constructor(
		@InjectRepository(Store) private storeRepository: Repository<Store>,
	) { }

	findAll() {
		return this.storeRepository.find({});
	}

	findOne(id: number) {
		return this.storeRepository.findOne({
			where: {
				id
			},
			relations: {
				products: true
			}
		});
	}
}
