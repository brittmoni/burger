var connection = require ('./connection');

var orm = {
  selectAll: function(tName, view) {
    connection.query(`SELECT * FROM ${tName};`, function(err, result) {
      if (err) {
        throw err;
      }
      view(result);
    });
  },
  insertOne: function(tName, colName, vals, view) {
    connection.query(`INSERT INTO ${tName} (${colName}) VALUES (${vals});`, function(err, result) {
      if (err) {
        throw err
      }
      view(result);
    });
  },
  updateOne: function(tName, val, cond, view) {
    connection.query(`UPDATE ${tName} SET ${val} WHERE ${cond};`, function(err,result) {
      if (err) {
        throw err
      }
      view(result);
    });
  }
};

module.exports = orm;