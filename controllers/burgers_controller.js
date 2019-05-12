var express = require('express'); 
var router = express.Router();
var burger = require('../models/burger');

router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    res.render('index', {burgers: data});
  });
});

router.post('/api/burgers', function(req, res) {
  burger.insertOne(req.body.burger_name, function(newBurger) {
    res.json(burgers);
  });
});

router.put('api/burgers/:id', function(req, res) {
  burger.updateOne(req.body.devoured, cond, function(newBurger) {
    if (newBurger.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.json(burgers);
    }
  });
});

module.exports = router;