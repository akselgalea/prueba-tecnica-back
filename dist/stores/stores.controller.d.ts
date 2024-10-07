import { Store } from './entities/store.entity';
import { StoresService } from './stores.service';
export declare class StoresController {
    private storeService;
    constructor(storeService: StoresService);
    findAll(): Promise<Store[]>;
    findOne(id: number): Promise<Store>;
}
