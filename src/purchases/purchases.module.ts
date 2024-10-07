import { Module } from "@nestjs/common";
import { PurchasesController } from "./purchases.controller";
import { PurchasesService } from "./purchases.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Purchase } from "./entities/purchase.entity";

@Module({
	imports: [TypeOrmModule.forFeature([Purchase])],
	controllers: [PurchasesController],
	providers: [PurchasesService],
})
export class PurchasesModule {}
