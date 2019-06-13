var connection = require ('./connection');

var orm = {
  selectAll: function(tName, view) {
    connection.query('SELECT * FROM ' + tName, function(err, result) {
      if (err) throw err;
      view(result);
    });
  },
  insertOne: function(tName, colName, val, view) {
    var query = 'INSERT INTO ' + tName;
    query += ' (';
    query += colName.toString();
    query += ')';
    query += ' VALUES (';
    query += val;
    query += ');';

    connection.query(query, function(err, result) {
      if (err) throw err;
      view(result);
    });
  },
  updateOne: function(cond, view) {
    connection.query(`UPDATE burgers SET devoured=true WHERE id=${cond};`, function(err,result) {
      if (err) throw err
      view(result);
    });
  }
};

module.exports = orm;