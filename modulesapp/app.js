var express = require("express");

var app = express();

app.get("/", function(request, response){
    response.end("Hello from express!");
});

app.listen(3000);