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
const image_1 = __importDefault(require("../../utilities/image"));
const checkInputs_1 = __importDefault(require("../../utilities/checkInputs"));
describe('Test Image Class ', () => {
    describe('Finding Image in ./Resized_Images', () => {
        it('The image has been found', () => {
            let img = new image_1.default(200, 200, 'pyramid', 'JPG');
            expect(img.check()).toBeTruthy();
        });
        it('The image has not been found', () => {
            let img = new image_1.default(205, 200, 'pyramid', 'JPG');
            expect(img.check()).toBeFalsy();
        });
    });
    describe('Finding Image in ./Images', () => {
        it('The image has been found', () => {
            let img = new image_1.default(200, 200, 'castle', 'JPG');
            expect((0, checkInputs_1.default)(img)).toBeTruthy();
        });
        it('The image has not been found', () => {
            let img = new image_1.default(200, 200, 'dasioha', 'JPG');
            expect((0, checkInputs_1.default)(img)).toBeFalsy();
        });
    });
    // to check if the image has been resized
    describe('Image has been resized', () => {
        it('Image has been resized with (500,500)', () => {
            let img = new image_1.default(500, 500, 'pyramid', 'JPG');
            expect(img.resize()).toBeTruthy();
        });
    });
    // to check about the image dimensions with wrong inputs
    describe('Image has not been resized', () => {
        // with negatives inputs
        it('Not resized due to negatives inputs', () => __awaiter(void 0, void 0, void 0, function* () {
            let img = new image_1.default(-500, -500, 'pyramid', 'JPG');
            let bool = yield img.resize();
            expect(bool).toBeFalsy();
        }));
        //with wrong file name
        it('Not resized due to Wrong fileName', () => __awaiter(void 0, void 0, void 0, function* () {
            let img = new image_1.default(500, 500, 'dnanas', 'JPG');
            let bool = yield img.resize();
            expect(bool).toBeFalsy();
        }));
    });
});
