var orm = require('../config/orm');

var burgers = {
  selectAll: function(view) {
    orm.selectAll('burgers', function(res) {
      view(res);
    });
  },
  insertOne: function(vals, view) {
    orm.insertOne('burgers', vals, function(res) {
      view(res);
    });
  },
  updateOne: function(val, cond, view) {
    orm.updateOne('burgers', val, cond, function(res) {
      view(res);
    });
  }
};

module.exports = burgers;