'use strict';
const conn = require('./config.js').config
function user_login(user) {
    return new Promise(function (resolve, reject) {
        conn.query('SELECT * FROM `users` WHERE `user_login` LIKE "'+user+'"', function (err, result) {
            if (err) throw err;
            resolve(result);
        });
    })
}
module.exports = {user_login: user_login};