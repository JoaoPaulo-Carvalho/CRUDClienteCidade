const request = require('supertest');
const app = require('../src/app');

describe('Testar a raiz do router', () => {
  test(
    'Deve responder à requisição GET com status 200',
    () => request(app)
      .get('/api/')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      }),
  );
});
