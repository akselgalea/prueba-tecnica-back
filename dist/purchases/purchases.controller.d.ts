import { PurchasesService } from "./purchases.service";
import { CreatePurchaseDto } from "./dto/create-purchase.dto";
export declare class PurchasesController {
    private purchaseService;
    constructor(purchaseService: PurchasesService);
    findAll(): Promise<import("./entities/purchase.entity").Purchase[]>;
    findOne(id: number): Promise<import("./entities/purchase.entity").Purchase>;
    create(body: CreatePurchaseDto): void;
}
