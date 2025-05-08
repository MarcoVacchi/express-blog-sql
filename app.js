const express = require("express");
const app = express();
const port = 3000;
const router = require("./router/postRouter");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/error");

app.use(express.static("public"));

app.use(express.json());

app.use("/postRouter", router);

app.use(notFound);

app.use(errorHandler);

//console.log("ciao");

app.listen(port, ()=>{
    console.log("sono un server attivo sulla porta"+ " " + port)
});