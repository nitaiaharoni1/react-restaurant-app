const request = require('supertest'),
    app = require('./index'),
    assert = require('assert');

const PASSWORD = 'admin',
    EMAIL = 'admin';

describe('Server Test', () => {
    jest.setTimeout(30000);
    const req = request(app);

    it('should login successful', async () => {
        let remember = false;
        const res = await req.get(`/api/user/login/${EMAIL}/${PASSWORD}/${remember}`);
        expect(res.status).toBe(200);
        expect(res.body.msg).toBe('Login successful');
        expect(res.header['set-cookie']).toBe(2);

});