var mysql = require('mysql')
var connection;

if (process .env.burgertime_url){
    connection = mysql.createConnection(process.env.burgertime_url);
}
else {
    connection =  mysql.createConnection({
        host : 'localhost',
        user : '',
        password : '',
        database : goodburgers_db,
    });
};


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
})

module.exports = connection;