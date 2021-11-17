const express =  require('express');

const router = express.Router();

router.get('/',(req, res) => {
    res.render("index");
  })

router.get('/homepage.html',(req, res) => {
    res.render("homepage");
  })

router.get('/homeDay.html',(req, res) => {
    res.render("homeDay");
  })

router.get('/create.html',(req, res) => {
    res.render("create");
  })

router.get('/createDay.html',(req, res) => {
    res.render("createDay");
  })

router.get('/view.html',(req, res) => {
    res.render("view");
  })

router.get('/viewDay.html',(req, res) => {
    res.render("viewDay");
  })

module.exports = router;