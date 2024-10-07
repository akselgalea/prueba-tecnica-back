import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { StoresService } from 'src/stores/stores.service';
export declare class ProductsService {
    private productRepository;
    private storeService;
    constructor(productRepository: Repository<Product>, storeService: StoresService);
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product[]>;
    create(data: CreateProductDto): Promise<{
        store: import("../stores/entities/store.entity").Store;
        name: string;
        price: number;
        image: string;
        storeId: number;
    } & Product>;
    update(id: number, data: any): Promise<any>;
    delete(id: number): Promise<import("typeorm").UpdateResult>;
}
