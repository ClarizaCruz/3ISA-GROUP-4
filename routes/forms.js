const express =  require('express');
const formsController = require('../controllers/forms');
const router = express.Router();

router.post('/create', formsController.create)

module.exports = router;