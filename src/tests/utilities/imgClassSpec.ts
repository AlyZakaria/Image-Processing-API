import image from '../../utilities/image'
import validateFileName from '../../utilities/checkInputs'

describe('Test Image Class ', () => {
    describe('Finding Image in ./Resized_Images', () => {
        it('The image has been found', () => {
            const img = new image(200, 200, 'pyramid', 'JPG')
            expect(img.check()).toBeTruthy()
        })
        it('The image has not been found', () => {
            const img = new image(205, 200, 'pyramid', 'JPG')
            expect(img.check()).toBeFalsy()
        })
    })
    describe('Finding Image in ./Images', () => {
        it('The image has been found', () => {
            const img = new image(200, 200, 'castle', 'JPG')
            expect(validateFileName(img)).toBeTruthy()
        })
        it('The image has not been found', () => {
            const img = new image(200, 200, 'dasioha', 'JPG')
            expect(validateFileName(img)).toBeFalsy()
        })
    })
    // to check if the image has been resized
    describe('Image has been resized', () => {
        it('Image has been resized with (500,500)', () => {
            const img = new image(500, 500, 'pyramid', 'JPG')
            expect(img.resize()).toBeTruthy()
        })
    })
    // to check about the image dimensions with wrong inputs
    describe('Image has not been resized', () => {
        // with negatives inputs
        it('Not resized due to negatives inputs', async () => {
            const img = new image(-500, -500, 'pyramid', 'JPG')
            const bool = await img.resize()
            expect(bool).toBeFalsy()
        })
        //with wrong file name
        it('Not resized due to Wrong fileName', async () => {
            const img = new image(500, 500, 'dnanas', 'JPG')
            const bool = await img.resize()
            expect(bool).toBeFalsy()
        })
    })
})
