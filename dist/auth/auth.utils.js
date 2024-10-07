"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptPassword = encryptPassword;
exports.comparePasswords = comparePasswords;
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;
async function encryptPassword(pass) {
    return bcrypt.hash(pass, SALT_ROUNDS);
}
async function comparePasswords(pass, hash) {
    return bcrypt.compare(pass, hash);
}
//# sourceMappingURL=auth.utils.js.map