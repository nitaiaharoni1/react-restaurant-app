const request = require('supertest'),
    app = require('./index'),
    expect = require('chai').expect;

describe('Server Test', () => {

    const PASSWORD = 'test',
        EMAIL = `test${Math.random().toString(36).substring(7)}@test.com`,
        ADDRESS = 'test',
        HOUSE_NUM = '1',
        CITY = 'test',
        ZIP = '123456',
        FIRST_NAME = 'Test',
        LAST_NAME = 'Test',
        COUNTRY = 'test';

    const req = request(app);

    it('should signup a new test user', async () => {
        const res = await req.post(`/api/user/signup`)
            .send({
                email: EMAIL,
                password: PASSWORD,
                address: ADDRESS,
                houseNum: HOUSE_NUM,
                city: CITY,
                zip: ZIP,
                firstName: FIRST_NAME,
                lastName: LAST_NAME,
                country: COUNTRY,
            })
            .set('Accept', 'application/json');
        expect(res.status).to.equal(200);
        expect(res.body.msg).to.equal('Signup successful');
        expect(res.header['set-cookie'].length).to.equal(1);
    });

    it('should logout successfully', async () => {
        const res = await req.post(`/api/user/logout`);
        expect(res.status).to.equal(200);
        expect(res.body.msg).to.equal('Logout successful');
    });

    it('should login successfully', async () => {
        let remember = false;
        const res = await req.get(`/api/user/login/${EMAIL}/${PASSWORD}/${remember}`);
        expect(res.status).to.equal(200);
        expect(res.body.msg).to.equal('Login successful');
        expect(res.header['set-cookie'].length).to.equal(1);
    });

    it('should add new item', async () => {
        let action = 'ADD',
            title = 'Fried Spring Rolls';
        const res = await req.post(`/api/items/${EMAIL}/${title}/${action}`);
        expect(res.status).to.equal(200);
        expect(res.body.msg).to.equal('Items we\'re updated');
    });

    it('should add another new item', async () => {
        let action = 'ADD',
            title = 'Tofu Tod';
        const res = await req.post(`/api/items/${EMAIL}/${title}/${action}`);
        expect(res.status).to.equal(200);
        expect(res.body.msg).to.equal('Items we\'re updated');
    });

    it('should add a third item', async () => {
        let action = 'ADD',
            title = 'Gai Of Nuur Satay';
        const res = await req.post(`/api/items/${EMAIL}/${title}/${action}`);
        expect(res.status).to.equal(200);
        expect(res.body.msg).to.equal('Items we\'re updated');
    });

    it('should subtract first item', async () => {
        let action = 'SUB',
            title = 'Fried Spring Rolls';
        const res = await req.post(`/api/items/${EMAIL}/${title}/${action}`);
        expect(res.status).to.equal(200);
        expect(res.body.msg).to.equal('Items we\'re updated');
    });

    it('should zero second item', async () => {
        let action = 'ZERO',
            title = 'Tofu Tod';
        const res = await req.post(`/api/items/${EMAIL}/${title}/${action}`);
        expect(res.status).to.equal(200);
        expect(res.body.msg).to.equal('Items we\'re updated');
    });

    it('should place a new order', async () => {
        const res = await req.post(`/api/order/new/${EMAIL}`);
        expect(res.status).to.equal(200);
        expect(res.body.msg).to.equal('Order successfully placed');
        expect(res.body.orderId).to.be.a('string');
        expect(res.body.data).to.be.an('object');
    });

    it('should get admin data', async () => {
        const res = await req.get(`/api/admin/data/admin`);
        expect(res.status).to.equal(200);
        expect(res.body.msg).to.equal('Admin data');
        expect(res.body.data).to.be.an('object');
    });

    it('should get gallery', async () => {
        const res = await req.get(`/api/gallery`);
        expect(res.status).to.equal(200);
        expect(res.body.images.length).to.equal(18);
    });

    after('should delete created user', async () => {
        const res = await req.delete(`/api/user/${EMAIL}/${PASSWORD}`);
        expect(res.status).to.equal(200);
        expect(res.body.msg).to.equal('User was deleted successfully');
    });

});
