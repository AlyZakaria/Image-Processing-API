"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getResizeImage_1 = require("../Middlewares/getResizeImage");
const imgRoute = express_1.default.Router();
imgRoute.get('/', getResizeImage_1.getResizedImage, (req, res) => {
    res.send('Image Page');
});
exports.default = imgRoute;
