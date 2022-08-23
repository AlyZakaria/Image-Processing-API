import app from '../../server'
import supertest from 'supertest'

const request = supertest(app)

describe('endpoint responses', () => {
    it('gets the api endpoint for Home Page', async () => {
        const response = await request.get('/')
        expect(response.statusCode).toBe(200)
    })
})
