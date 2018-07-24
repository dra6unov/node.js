var express = require("express");
var fs = require("fs");
 
var app = express();
app.use(function(request, response, next){
     
    var now = new Date();
    var hour = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} ${request.get("user-agent")}`;
    console.log(data);
    fs.appendFile("server.log", data + "\n", function(error,data){
        if (error) throw error;
    });
    next();
});
 
app.get("/", function(request, response){
    response.send("Hello");
});

//Виды маршрутизации
//? указывает, что символ 1 может встречаться 1 или 0 раз, т.е. 11 или 1
/*
app.get("/1?1", function(request, response){
    response.send(request.url);
});

//+ указывает, что символ 2 может встречаться 1 или больше раз, т.е. 22, 2222, 222222 и т.д.
app.get("/2+2", function(request, response){
    response.send(request.url);
});

//* указывает, что между 3_3 можно поставить любые символы в любом количестве, т.е. 3ффф3 или 345673
app.get("/3*3", function(request, response){
    response.send(request.url);
});

//(.html) указывает, что подстрока .html может встречаться или отсутствовать в запросе
app.get("/4(.html)?", function(request, response){
    response.send(request.url);
});

//символы обозначают, что запрос может состоять из рандомных символов, но обязательно должно быть .html
app.get(/.*(\.)html$/, function(request, response){
    response.send(request.url);
});
*/

//Передача параметров в маршруте
app.get("/prod/:prodId", function(request, response){
    response.send("prodId: " + request.params["prodId"]);
});


app.listen(3000);