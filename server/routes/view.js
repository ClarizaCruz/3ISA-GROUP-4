const express =  require('express');
const router = express.Router();
const viewController = require('../controllers/viewController');


router.get('/view', viewController.view);


module.exports = router;