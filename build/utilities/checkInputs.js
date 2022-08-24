"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const orDir = './Images';
// to check if this filename exists in ./Images
function validateFileName(img) {
    const files = fs_1.default.readdirSync(orDir);
    let dir = '';
    files.forEach((file) => {
        const filePath = file.split('.');
        if (filePath[0] === img.filename) {
            dir = file;
            return;
        }
    });
    if (dir === '')
        return false;
    return true;
}
exports.default = validateFileName;
