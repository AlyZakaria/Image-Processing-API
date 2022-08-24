import app from '../../server'
import supertest from 'supertest'

const request = supertest(app)

describe('endpoint responses', () => {
    it('gets the api endpoint for Image Page', async () => {
        const response = await request.get('/image')
        expect(response.statusCode).toBe(200)
    })
})
