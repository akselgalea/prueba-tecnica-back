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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const auth_utils_1 = require("./auth.utils");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async login(emailOrUsername, pass) {
        const user = await this.usersService.getByEmailOrUsername(emailOrUsername);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        const match = await (0, auth_utils_1.comparePasswords)(pass, user.password);
        if (!match) {
            throw new common_1.UnauthorizedException();
        }
        return {
            access_token: await this.jwtService.signAsync({
                sub: user.id,
                roles: user.roles,
            }),
            user: {
                username: user.username,
                name: user.name,
                roles: user.roles,
                email: user.email,
            },
        };
    }
    async register(data) {
        const user = await this.usersService.createUser(data);
        return {
            access_token: await this.jwtService.signAsync({
                sub: user.id,
                roles: user.roles,
            }),
            user: {
                username: user.username,
                name: user.name,
                roles: user.roles,
                email: user.email,
            },
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map