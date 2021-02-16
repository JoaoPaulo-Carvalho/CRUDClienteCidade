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

describe('Teste metodo GET de cidades', () => {
  test(
    'Status 201 - todas as cidades',
    () => request(app)
      .get('/api/cidades')
      .expect(201),
  );

  test(
    'Status 201 - uf == \'MG\'',
    () => request(app)
      .get('/api/cidades?uf=MG')
      .expect(201),
  );

  test(
    'Status 201 - nome == \'Juiz de Fora\'',
    () => request(app)
      .get('/api/cidades?nome=Juiz de Fora')
      .expect(201),
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

describe('Teste metodo GET de clientes', () => {
  test(
    'Status 201 - todos os clientes',
    () => request(app)
      .get('/api/clientes')
      .expect(201),
  );

  test(
    'Status 201 - nome == \'João Paulo de Carvalho Araújo\'',
    () => request(app)
      .get('/api/clientes?nome=João Paulo de Carvalho Araújo')
      .expect(201),
  );

  test(
    'Status 201 - id == \'aa2f80ee-5795-47ee-8905-3130cc110fb9\'',
    () => request(app)
      .get('/api/clientes?id=aa2f80ee-5795-47ee-8905-3130cc110fb9')
      .expect(201),
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
        dataNascimento: '1997-02-03',
        idade: 24,
        cidadeId: '9504c15d-1d6f-440e-a350-c00234c14408',
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
    'Status 409 - dataNascimento == \'\'',
    () => request(app)
      .post('/api/clientes')
      .send({
        nome: 'João Paulo',
        sexo: 'M',
        dataNascimento: '',
        idade: 24,
        cidadeId: '9504c15d-1d6f-440e-a350-c00234c14408',
      })
      .expect(409),
  );

  test(
    'Status 409 - faltando nome',
    () => request(app)
      .post('/api/clientes')
      .send({
        sexo: 'M',
        dataNascimento: '',
        idade: 24,
        cidadeId: '9504c15d-1d6f-440e-a350-c00234c14408',
      })
      .expect(409),
  );
});

describe('Teste metodo PATCH de clientes', () => {
  test(
    'Status 200 - id == \'df47416e-2ce9-4b8a-8123-8915569bb0b3\'',
    () => request(app)
      .patch('/api/clientes/df47416e-2ce9-4b8a-8123-8915569bb0b3')
      .send({ nome: 'Carlos Gomes' })
      .expect(200),
  );

  test(
    'Status 409 - nome em branco/não enviado',
    () => request(app)
      .patch('/api/clientes/df47416e-2ce9-4b8a-8123-8915569bb0b3')
      .send({ nome: '' })
      .expect(409),
  );

  test(
    'Status 404 - sem id',
    () => request(app)
      .patch('/api/clientes')
      .send({ nome: 'Carlos Gomes' })
      .expect(404),
  );
});

describe('Teste metodo DELETE de clientes', () => {
  test(
    'Status 201 - id == \'aa2f80ee-5795-47ee-8905-3130cc110fb9\'',
    () => request(app)
      .delete('/api/clientes/aa2f80ee-5795-47ee-8905-3130cc110fb9')
      .expect(201),
  );

  test(
    'Status 404 - sem dados',
    () => request(app)
      .delete('/api/clientes')
      .expect(404),
  );
});
