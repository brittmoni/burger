var connection = require ('./connection');

var orm = {
  selectAll: function(tName, cb) {
    connection.query('SELECT * FROM ' + tName, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(tName, val, cb) {
    var query = 'INSERT INTO ' + tName;
    query += ' (burger_name)';
    // query += colName.toString();
    // query += ')';
    query += ' VALUES ("';
    query += val;
    query += '");';

    connection.query(query, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(tName, cond, cb) {
    var query = 'UPDATE ' + tName;
    query += 'SET devoured=true';
    query += 'WHERE id= ';
    query += cond;

    connection.query(query, function(err,result) {
      if (err) throw err
      cb(result);
    });
  }
};

module.exports = orm;