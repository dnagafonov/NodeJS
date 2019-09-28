const express = require("express");
const SomeJson = require("./someJson");

var app = express();

app.use("/timoshka",function(request, response, next){
    console.log(request.query.id);
    console.log("Middleware 1");
    next();
});

app.use(function(request, response, next){
    console.log("Middleware 2");
    console.log("response");
    next();
});

app.get('/', (request,response) => {
    response.send("GetResponse1");
});

app.get("/json",(request,response,SomeJson) => {
    console.log(SomeJson);
});

app.get("/hernya", (request, response) => {
    response.send("GetResponse2");
}).listen(3000);

