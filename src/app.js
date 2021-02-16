const express = require('express');

const app = express();
const router = express.Router();
const { Cidades, Clientes } = require('./app/models');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', router);

router.get('/', (req, res) => {
  res.status(200).send('API funcionando pelo router!');
});

router.get('/cidades', (req, res) => {
  Cidades.findAll({ where: req.query })
    .then((result) => res.status(201).json(result))
    .catch((err) => res.status(409).send({ error: err.message }));
});

router.post('/cidades', (req, res) => {
  const values = {
    nome: req.body.nome || null,
    uf: req.body.uf || null,
  };

  Cidades.create(values)
    .then((result) => res.status(201).json(result))
    .catch((err) => res.status(409).send({ error: err.message }));
});

router.get('/clientes', (req, res) => {
  Clientes.findAll({ where: req.query })
    .then((result) => res.status(201).json(result))
    .catch((err) => res.status(409).send({ error: err.message }));
});

router.post('/clientes', (req, res) => {
  const values = {
    nome: req.body.nome || null,
    sexo: req.body.sexo || null,
    dataNascimento: req.body.dataNascimento || null,
    idade: req.body.idade || null,
    cidadeId: req.body.cidadeId || null,
  };

  Clientes.create(values)
    .then((result) => res.status(201).json(result))
    .catch((err) => res.status(409).send({ error: err.message }));
});

router.patch('/clientes/:id', async (req, res) => {
  try {
    if (req.body.nome) {
      const cliente = await Clientes.findByPk(req.params.id);
      cliente.nome = req.body.nome;
      cliente.save();
      res.status(200).json(cliente);
    } else {
      throw new Error('Nome do cliente em branco ou não enviado!');
    }
  } catch (err) {
    res.status(409).send({ error: err.message });
  }
});

router.delete('/clientes/:id', (req, res) => {
  Clientes.findByPk(req.params.id)
    .then((result) => result.destroy())
    .then((result) => res.status(201).json(result))
    .catch((err) => res.status(409).send({ error: err.message }));
});

module.exports = app;
