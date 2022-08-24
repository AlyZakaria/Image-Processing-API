import { resolve } from 'path'
import sharp from 'sharp'
import fs from 'fs'

const dir = './Resized_Images'
const orDir = './Images'

class image {
    width: number
    height: number
    filename: string
    type = 'JPG'
    filedir = ''
    fileTitle: (number | string)[] = []

    constructor(width: number, height: number, filename: string, type: string) {
        this.width = width
        this.height = height
        this.filename = filename
        this.type = type
        this.fileTitle = [this.filename, this.width, this.height, this.type]
    }

    // to check if the image is already in the resized_Image folder
    check(): boolean {
        const filDir = this.fileTitle.join('.')
        const files = fs.readdirSync(dir)
        let bool = false

        files.forEach((file: string) => {
            if (file === filDir) {
                this.filedir = resolve([dir, file].join('/'))
                bool = true
                return
            }
        })
        return bool
    }

    // Resizing image
    async resize(): Promise<boolean> {
        let imgResized = false
        try {
            //let imgDir = this.getTheImage(this.filename)
            //if (imgDir === '') throw new Error()

            await sharp(
                `${[orDir, [this.filename, this.type].join('.')].join('/')}`
            )
                .resize({
                    width: this.width,
                    height: this.height,
                    fit: 'contain',
                    background: '#0e0e0e',
                })
                .rotate(90)
                .toFile([dir, this.fileTitle.join('.')].join('/'))
                .then(() => {
                    this.filedir = resolve(
                        [dir, this.fileTitle.join('.')].join('/')
                    )
                    imgResized = true
                })
                .catch((): never => {
                    throw new Error()
                })
        } catch (e) {
            imgResized = false
        }
        return imgResized
    }
}

export default image
