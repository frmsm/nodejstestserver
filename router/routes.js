const { Router } = require('express');

const router = Router();

let user = null;

async function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

router.get('/form-data-node', (req, res, next) => {
  res.send({
    login: 'test-login',
  });
});

router.get('/freshes', async (req, res) => {
  await wait(1000);

  res.send({
    freshes: [
      { name: '1C:EDI', id: 'aaa3d4-234sd' },
      { name: '1C:БСП через Интернет', id: 'asf45s-asfgb4' },
    ],
  });
});

router.get('/login', async (req, res) => {
  await wait(1000);
  res.send({ user });
});

router.get('/exit', (req, res) => {
  const url = req.protocol + '://' + req.get('host');
  res.redirect(301, url);
});

router.post('/login', async (req, res, body) => {
  user = req.body.login;
  await wait(1000);
  res.send({ message: 'ok', login: req.body.login });
});

module.exports = router;
