'use strict';
var mysql = require('mysql');
var config = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    // password: 'Snail911',
    password: '',
    // database:'onload',
    database:'58pic',
    port: 3306
});
config.connect();
module.exports = {config:config};