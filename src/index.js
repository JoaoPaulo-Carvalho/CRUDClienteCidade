const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const router = express.Router();
const port = process.env.port || 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
});

pool.query(
  `
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  
  CREATE TABLE IF NOT EXISTS public.cidade (
    id uuid NOT NULL PRIMARY KEY UNIQUE DEFAULT uuid_generate_v4(),
    nome character varying NOT NULL,
    uf character varying NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS public.cliente (
    id uuid NOT NULL PRIMARY KEY UNIQUE DEFAULT uuid_generate_v4(),
    nome character varying NOT NULL,
    sexo character varying NOT NULL,
    data_nasc date NOT NULL,
    idade integer NOT NULL,
    cidade_id uuid NOT NULL,
    CONSTRAINT cliente_cidade_id_fkey
      FOREIGN KEY (cidade_id)
        REFERENCES public.cidade(id) ON UPDATE CASCADE ON DELETE RESTRICT
  );`,
);

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

app.listen(port);
