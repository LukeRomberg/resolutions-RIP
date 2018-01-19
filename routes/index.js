var express = require('express');
var router = express.Router();
var db = require('../db/query');

var arr= ["https://media.giphy.com/media/xTiTnqUxyWbsAXq7Ju/giphy.gif", "https://media.giphy.com/media/GnCc88zZhSVUc/giphy.gif", "https://media.giphy.com/media/YqvHYxcBDcfAs/giphy.gif", "https://media.giphy.com/media/R8RscTZV7Iy7m/giphy.gif",
"https://media.giphy.com/media/tknTt9MXVeP84/giphy.gif", "https://media.giphy.com/media/vo6h46NUgExPy/giphy.gif"];

/* GET home page. */
router.get('/', function(req, res, next) {
  db.getResolutions()
  .then(data => {
    res.render('index', {titles: data});
  })
});

router.get('/:id', function(req, res, next) {
  db.getResolution(req.params.id)
  .then(data => {
    res.render('category', {id: req.params.id, titles: data, gif: arr[req.params.id - 1]});
  })
});

router.post('/add', function(req, res, next) {
  db.addEntry(req.body)
  .then(data => {
    res.redirect(`/${req.body.cat_id}`)
  })
});

router.post('/vote/:id', function(req, res, next) {
  db.vote(req.body.cat_id, req.body.vote++)
  .then(data=>{
    res.redirect(`/${req.body.cat_id}`)
  })
});



module.exports = router;
