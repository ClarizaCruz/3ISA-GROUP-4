const express =  require('express');
const create = require('../controllers/create');
const router = express.Router();

router.post('/create', create.create);


module.exports = router;