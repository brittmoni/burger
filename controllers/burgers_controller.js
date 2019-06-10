var express = require('express'); 
var router = express.Router();
var burgers = require('../models/burger');

router.get('/', function(req, res) {
  burgers.selectAll(function(data) {
    console.log(data);
    res.render('index', {data});
  });
});

router.post('/api/burgers', function(req, res) {
  burgers.insertOne(req.body.burger_name, function(data) {
    console.log(data);
    // res.json(burgers);
    res.redirect('/');
  });
});

router.put('api/burgers/:id', function(req, res) {
  burgers.updateOne(req.body.devoured, cond, function(newBurger) {
    if (newBurger.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.json(burgers);
    }
  });
});

module.exports = router;