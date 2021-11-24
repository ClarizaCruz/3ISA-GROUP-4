const express =  require('express');
const createDay = require('../controllers/createDay');
const router = express.Router();

router.post('/createDay', createDay.create);

module.exports = router;