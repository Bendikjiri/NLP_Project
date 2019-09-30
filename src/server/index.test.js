const request = require('supertest');
const app = require('./index')

test('Server should be started', () => {
    request(app).get('/').then((response) => {
        expect(response.statusCode).toBe(200);
    });
});