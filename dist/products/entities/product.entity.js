"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const purchase_product_entity_1 = require("../../purchases/entities/purchase-product.entity");
const purchase_entity_1 = require("../../purchases/entities/purchase.entity");
const store_entity_1 = require("../../stores/entities/store.entity");
const typeorm_1 = require("typeorm");
let Product = class Product {
};
exports.Product = Product;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ nullable: true }),
    __metadata("design:type", Date)
], Product.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ nullable: true }),
    __metadata("design:type", Date)
], Product.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ nullable: true }),
    __metadata("design:type", Date)
], Product.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => store_entity_1.Store, (store) => store.products),
    __metadata("design:type", store_entity_1.Store)
], Product.prototype, "store", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => purchase_entity_1.Purchase),
    (0, typeorm_1.JoinTable)({ name: purchase_product_entity_1.PURCHASE_PRODUCTS_TABLE_NAME }),
    __metadata("design:type", Array)
], Product.prototype, "purchases", void 0);
exports.Product = Product = __decorate([
    (0, typeorm_1.Entity)()
], Product);
//# sourceMappingURL=product.entity.js.map