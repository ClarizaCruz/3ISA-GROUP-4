const express =  require('express');

const router = express.Router();

router.get('',(req, res) => {
    res.render("index");
  })

router.get('/homepage',(req, res) => {
    res.render("homepage");
  })

router.get('/homeDay',(req, res) => {
    res.render("homeDay");
  })

router.get('/create',(req, res) => {
    res.render("create");
  })

router.get('/createDay',(req, res) => {
    res.render("createDay");
  })

/*router.get('/view',(req, res) => {
    res.render("view");
  })

router.get('/viewDay',(req, res) => {
    res.render("viewDay");
  })*/

module.exports = router;