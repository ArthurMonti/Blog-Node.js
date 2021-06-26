const express = require("express");
const router = express.Router();

router.get("/categories",(req,res)=>{
    res.send("Testando");
});


module.exports = router;