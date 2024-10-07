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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_utils_1 = require("../auth/auth.utils");
const roles_enum_1 = require("../enums/roles.enum");
const role_entity_1 = require("../roles/entities/role.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    constructor(userRepository, roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }
    async findAll() {
        const [users, totalRows] = await this.userRepository.findAndCount({
            relations: {
                roles: true,
            },
        });
        return { users, totalRows };
    }
    exists(email, username) {
        return this.userRepository.findOne({
            where: [{ email }, { username }],
            relations: {
                roles: true,
            },
        });
    }
    getByEmailOrUsername(input) {
        return this.userRepository.findOne({
            where: [{ email: input }, { username: input }],
            relations: {
                roles: true,
            },
        });
    }
    getById(id) {
        return this.userRepository.findOne({
            where: {
                id,
            },
            relations: { roles: true },
        });
    }
    async createUser(user) {
        const usr = await this.exists(user.email, user.username);
        if (usr) {
            throw new common_1.HttpException("User already exists", common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        const { name, username, email, active } = user;
        const password = await (0, auth_utils_1.encryptPassword)(user.password);
        const hasRoles = user?.roles !== undefined;
        const where = {};
        if (hasRoles) {
            where.id = (0, typeorm_2.In)(user.roles);
        }
        else {
            where.name = roles_enum_1.RolesEnum.Usuario;
        }
        const roles = await this.roleRepository.find({
            where,
        });
        return this.userRepository.save({
            name,
            username,
            email,
            password,
            active,
            roles,
        });
    }
    async update(id, user) {
        const usr = await this.getById(id);
        if (!usr) {
            throw new common_1.NotFoundException("User not found");
        }
        if (user.roles && typeof user.roles[0] === "number") {
            user.roles = await this.roleRepository.find({
                where: {
                    id: (0, typeorm_2.In)(user.roles),
                },
            });
            console.log(user.roles);
        }
        return await this.userRepository.save({
            ...usr,
            ...user,
        });
    }
    async delete(id) {
        const user = await this.getById(id);
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        const result = await this.userRepository.softDelete(id);
        console.log(result);
        return { message: "User deleted successfully" };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map