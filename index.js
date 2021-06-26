const app = require("express")();

app.set('view engine', 'ejs');


app.get("/",(req,res) =>{
    res.send("Bem vindo ao meu site");
});


app.listen(3000, () =>{
    console.log("Servidor iniciado com sucesso!");
});