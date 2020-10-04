var connection = require('../config/connection.js');


var orm = {
  insert: function(goodburgers_tbl, goodburgers_col, some_val, cb){
    connection.query('INSERT INTO ' + goodburgers_tbl + ' ( ' + some_col + ' ) ' + ' VALUES (?)', [some_val], function(err, result){
      cb(result);
    });
  },
  read: function(goodburgers_tbl, cb){
    connection.query('SELECT *  FROM ' + goodburgers_tbl + ';', function(err, result){
      cb(result);
    });
  },
  update: function(goodburgers_tbl, goodburgers_set_col, some_set_val, some_col_param, some_val_param, cb){
    connection.query('UPDATE ' + goodburgers_tbl + ' SET ' + goodburgers_set_col + ' = ? WHERE ' + goodburgers_col_param + ' = ?', [goodburgers_set_val, goodburgers_val_param], function(err, result){
      cb(result);
    });
  },
  delete: function(goodburgers_tbl, some_col, some_val, cb){
    connection.query('DELETE FROM ' + googdburgers_tbl + ' WHERE ' + goodburgers_col + ' = ?',[goodburgers_val], function(err, result){
      cb(result);
    });
  }
}
module.exports = connection;