import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PurchasesService } from "./purchases.service";
import { CreatePurchaseDto } from "./dto/create-purchase.dto";

@Controller("purchases")
export class PurchasesController {
	constructor(private purchaseService: PurchasesService) {}

	@Get()
	findAll() {
		return this.purchaseService.findAll();
	}

	@Get(":id")
	findOne(@Param("id") id: number) {
		return this.purchaseService.findOne(id);
	}

	@Post()
	create(@Body() body: CreatePurchaseDto) {
		return this.purchaseService.create(body);
	}
}
