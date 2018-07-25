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

/*
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
*/

/*
//Работа с POST-запросами. 
var bodyParser = require("body-parser");
//bodyParser.urlencoded() - функция для парсинга данных с отправленной формы. Параметр {extended:false} задает то, как должен парситься объект
//При использовании параметра true будет использоваться библиотека qs. Она позволяет парсить данные x-www-form-urlencoded. Так же она позволяет
//создавать вложенные объекты, например { person: { name: 'bobby', age: '3' } }. Значение может являться массивом.
//Параметр false вызывает библиотеку query-string, которая является облегчённым аналогом qs. Она не способна создавать вложенные объекты.
//Данные представляются в виде ключ-значение { 'person[age]': '3', 'person[name]': 'bobby' }
var urlencodeParser = bodyParser.urlencoded({extended:false});

app.post("/register", urlencodeParser, function(request, response){
    if (!request.body) response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userAge}`);
});
*/

/*
//Работа с JSON и AJAX
var bodyParser = require("body-parser");
//Создаём оюъект для парсинга json
var jsonParser = bodyParser.json();

app.post("/user", jsonParser, function(request, response){
    if(!request.body) return response.sendStatus(400);
    //console.log(`${request.body.user} - ${request.body.age}`);
    console.log(request.body);
    //отправляем ответ обратно в формате json
    response.json(`${request.body.userName} - ${request.body.userAge}`);
});
*/

//Работа с движком представления hbs
var hbs = require ("hbs");
app.set("view engine", "hbs");

//Для задействования частичных представлений необходимо использовать метод hbs.registerPartials()  
//с указанием корневой папки + папки с представлениями
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", function(request, response){
    //Указываем, что в качестве ответа отправляем файл index.hbs
    response.render("index.hbs", {
        num: ["1", "2", "3", "4"]
    });
});

//Передача специальных данных. Указывается модель представления и параметры, которые передаются
app.get("/contact", function(request, response){
    response.render("contact.hbs", {
        title: "Мои контакты",
        email: "123",
        phone: "123456",
        mouseVisible : true,
        mouse: ["razer", "a4tech"]
    });
});
//Хелперы в hbs
//hbs.registerHelper() говорит о том, что здесь мы задамём хелпер. Хелпер можно вставить в любую часть представления
//но не только в виде строки, а ещё и в виде конкретного html кода. Первый параметр отвечает за название хелпера
//второй отвечяает за функционал хелпера
hbs.registerHelper("getTime", function(){
    let myDate = new Date();
    let hour = myDate.getHours();
    let minute = myDate.getMinutes();
    let second = myDate.getSeconds();
    if(minute<10){
        minute = "0" + minute;
    }
    if(second<10){
        second = "0" + second;
    }
    return "Текущее время: " + hour + ":" + minute + ":" + second;
});

hbs.registerHelper("abc", function(array){
    let result = "";
    for(let i=0; i<array.length; i++){
        result += "<li>" + array[i] + "</li>";
    }
    return new hbs.SafeString("<ul>" + result + "</ul>");
});







app.listen(3000);