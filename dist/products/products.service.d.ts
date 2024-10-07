import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { StoresService } from 'src/stores/stores.service';
import { UpdateProductDto } from './dto/update-product.dto';
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
    update(id: number, data: UpdateProductDto): Promise<{
        name: string;
        price: number;
        image: string;
        id: number;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
        store: import("../stores/entities/store.entity").Store;
        purchases: import("../purchases/entities/purchase.entity").Purchase[];
    } & Product>;
    delete(id: number): Promise<import("typeorm").UpdateResult>;
}
