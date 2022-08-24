import express from 'express'
import imgRoute from './Route/imageRoute'
const app = express()
const port = 3000

app.get('/', (req: express.Request, res: express.Response): void => {
    res.send(`Home Page`)
})

app.use('/image', imgRoute)

app.listen(port, () => {
    console.log(`server started at localhost:${port}`)
})

export default app
