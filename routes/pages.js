const express =  require('express');

const router = express.Router();

router.get('/',(req, res) => {
    res.render("index");
  })

router.get('/homepage.html',(req, res) => {
    res.render("homepage");
  })

router.get('/create.html',(req, res) => {
    res.render("create");
  })

router.get('/createDay.html',(req, res) => {
    res.render("createDay");
  })

module.exports = router;