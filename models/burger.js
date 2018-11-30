const orm = require('../config/orm');

var burger = {

    getAll: function(cb) {
        orm.getAll('burgers', (res) => {
            cb(res);
        });
    },

    create: function(cols, vals, cb) {
        orm.create('burgers', cols, vals, (res) => {
            cb(res);
        });
    },

    update: function(vals, condition, cb) {
        orm.update('burgers', 'devoured', vals, condition, (res) => {
            cb(res);
        });
    }
}

module.exports = burger;