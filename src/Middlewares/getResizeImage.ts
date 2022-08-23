import express from 'express'
import image from '../utilities/image'
import validateFileName from '../utilities/checkInputs'

export function getResizedImage(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    getImage(req, res, next)
        .then((img) => res.sendFile(img.filedir))
        .catch(async (img) => {
            await img.resize()
            res.sendFile(img.filedir)
        })
        .catch((error: Error) =>
            res.send("Image can't be processed... Please,Try again..")
        )
}

let getImage = (
    req: express.Request,
    res: express.Response,
    next: Function
): Promise<image> => {
    let img = new image(0, 0, '', '')
    return new Promise((resolve, reject) => {
        let filename = req.query.filename as unknown as string
        let height = Number(req.query.height)
        let width = Number(req.query.width)
        img = new image(width, height, filename, 'JPG')

        if (img.check()) resolve(img)
        else {
            if (validateFileName(img)) reject(img)
            else throw new Error()
        }
    })
}
