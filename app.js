const express = require('express');

const config = require('config');
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use('/node', require('./router/routes'));

const PORT = config.get('port') || 8080;

app.listen(PORT, () => console.log(`app on port ${PORT}`));
