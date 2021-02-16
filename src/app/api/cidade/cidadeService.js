const { Cidades } = require('../../models');

module.exports = (router) => {
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
};
