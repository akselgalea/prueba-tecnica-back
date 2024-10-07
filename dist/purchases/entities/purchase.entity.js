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
exports.Purchase = void 0;
const product_entity_1 = require("../../products/entities/product.entity");
const typeorm_1 = require("typeorm");
const purchase_product_entity_1 = require("./purchase-product.entity");
const user_entity_1 = require("../../users/entities/user.entity");
let Purchase = class Purchase {
};
exports.Purchase = Purchase;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Purchase.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Purchase.prototype, "contactNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Purchase.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ nullable: true }),
    __metadata("design:type", Date)
], Purchase.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ nullable: true }),
    __metadata("design:type", Date)
], Purchase.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ nullable: true }),
    __metadata("design:type", Date)
], Purchase.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.purchases),
    __metadata("design:type", user_entity_1.User)
], Purchase.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => product_entity_1.Product),
    (0, typeorm_1.JoinTable)({ name: purchase_product_entity_1.PURCHASE_PRODUCTS_TABLE_NAME }),
    __metadata("design:type", Array)
], Purchase.prototype, "products", void 0);
exports.Purchase = Purchase = __decorate([
    (0, typeorm_1.Entity)()
], Purchase);
//# sourceMappingURL=purchase.entity.js.map