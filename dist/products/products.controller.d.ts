import { ProductsService } from './products.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductsController {
    private productService;
    constructor(productService: ProductsService);
    findAll(): Promise<import("./entities/product.entity").Product[]>;
    findOne(id: number): Promise<import("./entities/product.entity").Product[]>;
    create(body: CreateProductDto): Promise<{
        store: import("../stores/entities/store.entity").Store;
        name: string;
        price: number;
        image: string;
        storeId: number;
    } & import("./entities/product.entity").Product>;
    update(id: number, body: UpdateProductDto): Promise<any>;
    delete(id: number): Promise<import("typeorm").UpdateResult>;
}
