var http = require("http");
var fs = require("fs");

http.createServer(function(request,response){
    /*console.log("Url: " + request.url);
    console.log("Тип запроса: " + request.method);
    console.log("User-agent: " + request.headers["user-agent"]);
    console.log("--------------------------------------------");
    console.log("Все заголовки");
    console.log(request.headers);

    response.setHeader("UserId", 12);
    response.setHeader("Content-Type","text/html");
    response.write("<h2>Hello World!</h2>")
    response.end();*/

    //Статические файлы
    /*
    console.log(`Запрошенный адрес: ${request.url}`);
    if(request.url.startsWith("/public/")){
        //Берёт строку из запроса начиная с первого элемента, т.е. с public/index.html
        var filePath = request.url.substr(1);
        console.log("filePath: " + filePath);

        //Считываем файл по пути public/index.html относительно файла app.js. Используем коллбэк
        fs.readFile(filePath, function(error,data){
            //Если нет такого файла, то выдаём ошибку
            if(error){
                response.statusCode =404;
                response.end("Page not found!");
            }
            //Если найден, то возвращаем объект data, т.е. сам html файл
            else{
                response.end(data);
            }
            return;
        });
    }
    else{
        response.end("Hello World!");
    }
    */

    //Шаблоны
    /*
    fs.readFile("public/index.html", "utf8", function(error,data){
        var message = "Learning NodeJS";
        var header = "Main Page1";
        data = data.replace("{header}",header).replace("{message}",message);
        response.end(data);
    });
    */

   //Stream и отправка файлов
   if(request.url=="/test.docx"){
       //Указываем тип контента, который отправляем пользователю
       response.writeHead(200, {"Content-Type" : "application/msword"});
       //Создаём поток для считывания данных из файла. Далее этот поток отправляем как ответ пользователю и он уже получает файл
       fs.createReadStream("test.docx").pipe(response);
   }
   else{
       response.end("WRONG!!!");
   }

}).listen(3000,"127.0.0.1" ,function(){
    console.log("Сервер начал прослушивание на порту 3000");
});