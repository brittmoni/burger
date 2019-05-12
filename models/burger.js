var orm = require('../config/orm');

var burgers = {
  all: function(view) {
    orm.all('burgers', function(res) {
      view(res);
    });
  },
  insert: function(colName, vals, view) {
    orm.insert('burgers', colName, vals, function(res) {
      view(res);
    });
  },
  update: function(val, cond, view) {
    orm.update('burgers', val, cond, function(res) {
      view(res);
    });
  }
};

module.exports = burgers;