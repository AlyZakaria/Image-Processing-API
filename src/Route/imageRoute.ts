import express from 'express'
import image from '../utilities/image'
import { getResizedImage } from '../Middlewares/getResizeImage'

const imgRoute = express.Router()

imgRoute.get('/', getResizedImage, (req, res) => {
    res.send('Image Page')
})

export default imgRoute
