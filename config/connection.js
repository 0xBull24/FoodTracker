const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'burger_db'
});

connection.connect(err => {
    if (err) throw err;
    console.log(`Connected to the database on id ${connection.threadId}`);
});

module.exports = connection;