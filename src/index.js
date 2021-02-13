const express = require('express');

const app = express();
const router = express.Router();
const port = process.env.port || 3000;

app.use('/api', router);

router.get('/', (req, res) => {
  res.send('API funcionando pelo router!');
});

app.listen(port);
