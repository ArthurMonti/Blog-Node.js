const express = require("express");
const app = express();
const connection = require('./database/database');

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

connection
        .authenticate()
        .then(() =>{
            console.log("conexão realizada com sucesso!");
        }).catch((error) =>{
            console.log(error);
        });

        
app.use("/",articlesController);
app.use("/",categoriesController);

app.get("/",(req,res) =>{
    res.render("index");
});


app.listen(3000, () =>{
    console.log("Servidor iniciado com sucesso!");
});