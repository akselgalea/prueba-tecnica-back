import {
	IsArray,
	IsNotEmpty,
	IsNumber,
	IsPositive,
	IsString,
} from "class-validator";

export class CreatePurchaseDto {
	@IsString()
	@IsNotEmpty()
	userId: string;

	@IsNumber()
	@IsPositive()
	tiendaId: number;

	@IsString()
	@IsNotEmpty()
	contactNumber: string;

	@IsString()
	@IsNotEmpty()
	address: string;

	@IsArray()
	@IsNotEmpty()
	products: CreatePurchaseProductDto[];
}

class CreatePurchaseProductDto {
	@IsNumber()
	@IsPositive()
	productId: number;

	@IsNumber()
	@IsPositive()
	unitPrice: number;

	@IsNumber()
	@IsPositive()
	quantity: number;

	@IsNumber()
	@IsPositive()
	total: number;
}
