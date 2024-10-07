export declare class CreatePurchaseDto {
    userId: string;
    tiendaId: number;
    contactNumber: string;
    address: string;
    products: CreatePurchaseProductDto[];
}
declare class CreatePurchaseProductDto {
    productId: number;
    unitPrice: number;
    quantity: number;
    total: number;
}
export {};
