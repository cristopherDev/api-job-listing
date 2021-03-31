const request = require('supertest');
const app = require('../src/server');

describe('Get message', () => {
    it('Should get message from api', async () => {
        const res = await request(app).get('/api');

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({ message: 'server on!' });
    });
});