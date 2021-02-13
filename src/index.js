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
  `CREATE TABLE IF NOT EXISTS public.cidade (
    id uuid NOT NULL PRIMARY KEY UNIQUE,
    nome character varying NOT NULL,
    uf character varying NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS public.cliente (
    id uuid NOT NULL PRIMARY KEY UNIQUE,
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
  res.send('API funcionando pelo router!');
});

router.post('/cidades', (req, res) => {
  res.status(200).json(req.body);
});

app.listen(port);
