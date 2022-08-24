import express from 'express'
import { getResizedImage } from '../Middlewares/getResizeImage'

const imgRoute = express.Router()

imgRoute.get(
    '/',
    getResizedImage,
    (req: express.Request, res: express.Response): void => {
        res.send('Image Page')
    }
)

export default imgRoute
