const express = require('express')
const app = express();

const main = require('./rotas/main')

app.set("view engine" , "ejs");
app.use("/index", main);

app.listen(3000);