const app = require('../app');
const supertest = require('supertest');

const request = supertest(app);

describe('Endpoints', () => {
  describe('Users', () => {
    describe('get', () => {
      it('Get JSON of Users', async () => {
        const res = await request.get('/');

        expect(res.status).toBe(200);
        expect(res.body).toBeDefined();
      });
    });

    describe('post', () => {
      it('Create Succesfully a new user', async () => {
        const res = await request
          .post('/')
          .send({ name: 'Santiago', username: 'Santychuy' });

        expect(res.status).toBe(200);
      });
    });

    describe('put', () => {
      it('Update User', async () => {
        const res = await request
          .put('/1')
          .send({ name: 'Santiago', username: 'Santychuy' });

        expect(res.status).toBe(200);
      });
    });

    describe('delete', () => {
      it('Delete User', async () => {
        const res = await request.delete('/1');

        expect(res.status).toBe(200);
      });
    });
  });
});
