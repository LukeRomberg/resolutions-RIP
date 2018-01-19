var express = require('express');
var router = express.Router();
var db = require('../db/query');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.getResolutions()
  .then(data => {
    res.render('index', {title: 'RIP', titles: data});
  })
});

router.get('/:id', function(req, res, next) {
  db.getResolution(req.params.id)
  .then(data => {
    res.render('category', {title: 'RIP', titles: data});
  })
});

router.put('/:id/:entry', function(req, res, next) {
  db.vote(req.params.entry, req.body.vote)
  .then(data => {
    res.render('category', {title: 'RIP', titles: data});
  })
});

router.post('/:id', function(req, res, next) {
  req.body.votes = 0;
  req.body.cat_id = req.params.id
  db.addEntry(req.body)
  .then(data => {
    res.render('category', {title: 'RIP', titles: data});
  })
});



module.exports = router;
