"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Public = exports.PUBLIC_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.PUBLIC_KEY = "isPublic";
const Public = () => (0, common_1.SetMetadata)(exports.PUBLIC_KEY, true);
exports.Public = Public;
//# sourceMappingURL=auth.decorators.js.map