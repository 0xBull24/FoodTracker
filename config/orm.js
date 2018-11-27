const connection = require('../config/connection');

var orm = {

    getAll: (table, cb) => {
        connection.query(`Select * from ${table}`, (err, result) => {
            if (err) throw err

            // Give the result of query to the callback function
            cb(result);
        });
    },

    create: (table, col, val, cb) => {
        connection.query(`Insert into ${table} ${col} values (${val})`, (err, result) => {
            if (err) throw err

            // Give the result of query to the callback function
            cb(result);
        })
    },

    update: (table, col, val, condition, cb) => {
        connection.query(`update ${table} set ${col} = ${val} where ${condition}`, (err, result) => {
            if (err) throw err

            // Give the result of query to the callback function
            cb(result);
        })
    }
}

module.exports = orm;