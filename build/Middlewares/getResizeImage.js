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
exports.getResizedImage = void 0;
const image_1 = __importDefault(require("../utilities/image"));
const checkInputs_1 = __importDefault(require("../utilities/checkInputs"));
function getResizedImage(req, res, next) {
    getImage(req, res, next)
        .then((img) => res.sendFile(img.filedir))
        .catch((img) => __awaiter(this, void 0, void 0, function* () {
        yield img.resize();
        res.sendFile(img.filedir);
    }))
        .catch((error) => res.send("Image can't be processed... Please,Try again.."));
}
exports.getResizedImage = getResizedImage;
let getImage = (req, res, next) => {
    let img = new image_1.default(0, 0, '', '');
    return new Promise((resolve, reject) => {
        let filename = req.query.filename;
        let height = Number(req.query.height);
        let width = Number(req.query.width);
        img = new image_1.default(width, height, filename, 'JPG');
        if (img.check())
            resolve(img);
        else {
            if ((0, checkInputs_1.default)(img))
                reject(img);
            else
                throw new Error();
        }
    });
};
