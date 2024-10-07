import { Repository } from "typeorm";
import { Store } from "./entities/store.entity";
export declare class StoresService {
    private storeRepository;
    constructor(storeRepository: Repository<Store>);
    findAll(): Promise<Store[]>;
    findOne(id: number): Promise<Store>;
}
