const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./database');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', router);

router.get('/', (req, res) => {
  res.status(200).send('API funcionando pelo router!');
});

router.post('/cidades', (req, res) => {
  const { nome, uf } = req.body;

  const values = [nome, uf];

  pool.query('INSERT INTO public.cidade(nome, uf) VALUES($1, $2) RETURNING *', values, (err, result) => {
    if (err) {
      res.status(409).send({ error: err.message });
    } else {
      res.status(201).json(result.rows[0]);
    }
  });
});

router.post('/clientes', (req, res) => {
  const {
    nome, sexo, dataNasc, idade, cidadeID,
  } = req.body;

  const values = [nome, sexo, dataNasc, idade, cidadeID];

  pool.query('INSERT INTO public.cliente(nome, sexo, data_nasc, idade, cidade_id) VALUES($1, $2, $3, $4, $5) RETURNING *', values, (err, result) => {
    if (err) {
      res.status(409).send({ error: err.message });
    } else {
      res.status(201).json(result.rows[0]);
    }
  });
});

module.exports = app;
