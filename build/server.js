"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageRoute_1 = __importDefault(require("./Route/imageRoute"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send(`Home Page`);
});
app.use('/image', imageRoute_1.default);
app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});
exports.default = app;
