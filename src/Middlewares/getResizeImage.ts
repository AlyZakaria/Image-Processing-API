import express from 'express'
import image from '../utilities/image'
import validateFileName from '../utilities/checkInputs'

export function getResizedImage(
    req: express.Request,
    res: express.Response
): void {
    getImage(req)
        .then((img) => res.sendFile(img.filedir))
        .catch(async (img) => {
            await img.resize()
            res.sendFile(img.filedir)
        })
        .catch(() => res.send("Image can't be processed... Please,Try again.."))
}

const getImage = (req: express.Request): Promise<image> => {
    let img = new image(0, 0, '', '')
    return new Promise((resolve, reject) => {
        const filename = req.query.filename as unknown as string
        const height = Number(req.query.height)
        const width = Number(req.query.width)
        img = new image(width, height, filename, 'JPG')

        if (img.check()) resolve(img)
        else {
            if (validateFileName(img)) reject(img)
            else throw new Error()
        }
    })
}
