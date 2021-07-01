const Sequelize = require("sequelize");

const connection = new Sequelize('Blog','root','admin',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00",
    logging: false
});

module.exports = connection;