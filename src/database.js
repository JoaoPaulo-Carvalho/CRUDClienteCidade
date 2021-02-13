const { Pool } = require('pg');

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

module.exports = pool;
