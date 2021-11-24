const express =  require('express');
const router = express.Router();
const viewDay = require('../controllers/viewDay');


router.get('/viewDay', viewDay.view);


module.exports = router;