const express = require('express');
const cidadeService = require('../app/api/cidade/cidadeService');
const clienteService = require('../app/api/cliente/clienteService');

module.exports = (app) => {
  const router = express.Router();

  app.use('/api', router);

  router.get('/', (req, res) => {
    res.status(200).send('API funcionando pelo router!');
  });

  cidadeService(router);

  clienteService(router);

  return router;
};
