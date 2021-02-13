const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const port = process.env.port || 3000;

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
