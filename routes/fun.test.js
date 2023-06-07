const request = require('supertest');
const { app } = require('./plugin');

describe('fun routes', () => {
    describe('GET /fun', () => {
        it('returns 200 success', async () => {
            const response = await request(app.callback()).get('/fun');
            expect(response.status).toBe(200);
            expect(response.body).toEqual({ success: true });
        });
    });
});
