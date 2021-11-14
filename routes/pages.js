const express =  require('express');

const router = express.Router();
const app = express();

router.get('',(req, res) => {
    res.render("index");
  })
router.get('/homepage',(req, res) => {
    res.render("homepage");
  })

module.exports = router;