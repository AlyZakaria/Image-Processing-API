import express from 'express'
import { readFileSync } from 'fs'
import imgRoute from './Route/imageRoute'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(`Home Page`)
})

app.use('/image', imgRoute)

app.listen(port, () => {
    console.log(`server started at localhost:${port}`)
})

export default app
