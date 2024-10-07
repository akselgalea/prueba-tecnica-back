import { Purchase } from "./entities/purchase.entity";
import { Repository } from "typeorm";
import { CreatePurchaseDto } from "./dto/create-purchase.dto";
export declare class PurchasesService {
    private purchaseRepository;
    constructor(purchaseRepository: Repository<Purchase>);
    findAll(): Promise<Purchase[]>;
    findOne(id: number): Promise<Purchase>;
    create(input: CreatePurchaseDto): void;
}
