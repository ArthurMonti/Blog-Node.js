const Sequelize = require("sequelize");

const connection = new Sequelize('Blog','root','admin',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;