const { Router } = require('express');
const router = Router();

router.get('/form-data', (req, res, next)=> {res.send({test:'TEST'})})

module.exports = router;