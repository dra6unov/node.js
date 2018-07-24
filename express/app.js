var express = require("express");
var fs = require("fs");
 
var app = express();
//Middleware или иначе функция, которая выполняется перед запросом
/*app.use(function(request, response, next){
     
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
});*/

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

/*
//Передача параметров в маршруте
app.get("/prod/:prodId", function(request, response){
    response.send("prodId: " + request.params["prodId"]);
});

//Передача нескольких параметров в маршруте
app.get("/ab/:abId/cd/:cdId", function(request, response){
    response.send(`ab: ${request.params["abId"]}  cd: ${request.params["cdId"]}`);
});
*/

/*
//express.Router
var rout = express.Router();
//Подмаршрут /product/
rout.route("/").get(function(request,response){
    response.send("Product list");
});

//Подмаршрут /product/1
rout.route("/:id").get(function(request,response){
    response.send(`Id: ${request.params.id}`);
});

//Соединение основного маршрута с его "мелкими" частями
app.use("/product", rout);
*/

//Статические файлы
//для вызыва компонента используется app.use(), express.static указывает, что компонент является статическим
//__dirname + "/public") указывает на место, где располагается статический файл, а именно корневая папка + public (папка)
//так же запрос происходит по маршруту http://localhost:3000/about.html. Т.е. в самой ссылке не указывается папка паблик.
//Можно задать маршрут к статическому файлу через добавление "/static" и тогда запрос будет выглядеть http://localhost:3000/static/about.html
app.use("/static", express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public"));

app.get("/", function(request, response){
    response.send("<h1>Main Page</h1>");
});

app.get("/contact", function(request, response){
    response.send("<h1>Contact</h1>");
});



app.listen(3000);