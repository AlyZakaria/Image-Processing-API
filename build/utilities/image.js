"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = __importDefault(require("fs"));
const dir = './Resized_Images';
const orDir = './Images';
class image {
    constructor(width, height, filename, type) {
        this.type = 'JPG';
        this.filedir = '';
        this.fileTitle = [];
        this.width = width;
        this.height = height;
        this.filename = filename;
        this.type = type;
        this.fileTitle = [this.filename, this.width, this.height, this.type];
    }
    // to check if the image is already in the resized_Image folder
    check() {
        const filDir = this.fileTitle.join('.');
        const files = fs_1.default.readdirSync(dir);
        let bool = false;
        files.forEach((file) => {
            if (file === filDir) {
                this.filedir = (0, path_1.resolve)([dir, file].join('/'));
                bool = true;
                return;
            }
        });
        return bool;
    }
    // Resizing image
    resize() {
        return __awaiter(this, void 0, void 0, function* () {
            let imgResized = false;
            try {
                //let imgDir = this.getTheImage(this.filename)
                //if (imgDir === '') throw new Error()
                yield (0, sharp_1.default)(`${[orDir, [this.filename, this.type].join('.')].join('/')}`)
                    .resize({
                    width: this.width,
                    height: this.height,
                    fit: 'contain',
                    background: '#0e0e0e',
                })
                    .rotate(90)
                    .toFile([dir, this.fileTitle.join('.')].join('/'))
                    .then(() => {
                    this.filedir = (0, path_1.resolve)([dir, this.fileTitle.join('.')].join('/'));
                    imgResized = true;
                })
                    .catch(() => {
                    throw new Error();
                });
            }
            catch (e) {
                imgResized = false;
            }
            return imgResized;
        });
    }
}
exports.default = image;
