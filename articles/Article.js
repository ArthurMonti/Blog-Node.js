const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define('article',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug:{
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }

})
// Um para muitos 
Category.hasMany(Article); //Uma categoria tem muitos artigos
// Um para Um
Article.belongsTo(Category); // um artigo pertence a uma categoria



module.exports = Article;
