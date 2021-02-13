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
      .send({ nome: 'Juiz de Fora', uf: '' })
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

describe('Teste metodo POST de clientes', () => {
  test(
    'Status 201 - dados completos',
    () => request(app)
      .post('/api/clientes')
      .send({
        nome: 'João Paulo',
        sexo: 'M',
        dataNasc: '1997-02-03',
        idade: 24,
        cidadeID: '6ccf2dff-4ed3-4fb7-b5f7-4c9fcd179aa8',
      })
      .expect(201),
  );

  test(
    'Status 409 - sem dados',
    () => request(app)
      .post('/api/clientes')
      .send({})
      .expect(409),
  );

  test(
    'Status 409 - dataNasc == \'\'',
    () => request(app)
      .post('/api/clientes')
      .send({
        nome: 'João Paulo',
        sexo: 'M',
        dataNasc: '',
        idade: 24,
        cidadeID: '6ccf2dff-4ed3-4fb7-b5f7-4c9fcd179aa8',
      })
      .expect(409),
  );

  test(
    'Status 409 - faltando nome',
    () => request(app)
      .post('/api/clientes')
      .send({
        sexo: 'M',
        dataNasc: '',
        idade: 24,
        cidadeID: '6ccf2dff-4ed3-4fb7-b5f7-4c9fcd179aa8',
      })
      .expect(409),
  );
});
