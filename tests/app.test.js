const request = require('supertest');
const app = require('../src/app');

describe('Testar a raiz do router', () => {
  test(
    'Deve responder à requisição GET com status 200',
    () => request(app)
      .get('/api/')
      .expect(200),
  );
});

describe('Teste metodo POST de cidades', () => {
  test(
    'Status 201 - dados completos',
    () => request(app)
      .post('/api/cidades')
      .send({ nome: 'Juiz de Fora', uf: 'MG' })
      .expect(201),
  );

  test(
    'Status 409 - sem dados',
    () => request(app)
      .post('/api/cidades')
      .send({})
      .expect(409),
  );

  test(
    'Status 409 - uf == \'\'',
    () => request(app)
      .post('/api/cidades')
      .send({ nome: 'Juiz de Fora' })
      .expect(409),
  );

  test(
    'Status 409 - faltando nome',
    () => request(app)
      .post('/api/cidades')
      .send({ uf: 'MG' })
      .expect(409),
  );
});
