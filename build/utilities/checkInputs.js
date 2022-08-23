"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const dir = './Resized_Images';
const orDir = './Images';
// to check if this filename exists in ./Images
function validateFileName(img) {
    const files = fs.readdirSync(orDir);
    let dir = '';
    files.forEach((file) => {
        let filePath = file.split('.');
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
