var http = require("http");
var fs = require("fs");

var message = "Йоу, Ванёк, дроу!";
/*
function displaySync(data){
    console.log(data);
}

//Асинхронное чтение файла
var asyncFileContent = fs.readFile("hello.txt", "utf8", 
                    function(error, data){
                        console.log("Async file reading");
                        if(error) throw error;
                        console.log(data);
});

//синхронное чтение файла
console.log("Синхронное чтение файла");
var syncFileContent = fs.readFileSync("hello.txt", "utf8");
console.log(syncFileContent);

//Асинхронная запись файла и тест создания файла
var asyncFileWrite = fs.writeFile("hey.txt", "hey 2c Kappa!  ", "utf8" ,function(error,data){
    if (error) throw error;
    console.log("Асинхронная запись завершена. Содержимое файла: " );
    data = fs.readFileSync("hey.txt","utf8");
    console.log(data);
});

//Асинхронное добавление текста в файл
var asyncFileAppend = fs.appendFile("hey.txt", "  Асинхронное добавление.", "utf8", function(error,data){
    if(error) throw error;
    var data = fs.readFileSync("hey.txt","utf8");
    console.log("Запись завершена! Содержимое файла: " + data);
});

//Синхронное добавление текса в файл
fs.appendFileSync("hey.txt", "Синхронное добавление. ", "utf8");
console.log("Синхронное добавление в файл завершено!");*/

//var syncFileWrite = fs.writeFileSync("hey")

//асинхронное выполнение
/*function display(data, callback){
    var randInt = Math.random() *(10-1) +1;
    var err = randInt>5? new Error("Ошибка выполнения. Значение больше 5") : null;

    setTimeout(function(){
        callback(err,data);
    },0);
}*/

//События, также известные как эммитеры
/*var Emmiter = require("events");
var emmiter = new Emmiter();
var eventName = "greet";

//Эммитер с передачей параметров
emmiter.on(eventName,function(data){
    console.log("------------------------------------------------");
    console.log("Сработал эммитер1");
    console.log(data);
});

//Эммитер без передачи параметров
emmiter.on(eventName, function(){
    console.log("------------------------------------------------");
    console.log("Сработал эммитер2");
    console.log("------------------------------------------------");
});

//Вызов события
emmiter.emit(eventName, "  Вызов события с передачей параметра");*/

//Наследование от EventEmitter
/*var util = require("util");
var EventEmitter = require("events");

function User(){}
util.inherits(User,EventEmitter);
var eventName="greet";
User.prototype.sayHi = function(data){
    this.emit(eventName,data);
}

var user = new User();
user.on(eventName, function(data){
    console.log(data);
});

user.sayHi("Мне нужен твой программный код...");*/

//Работа с потоками данных
/*var writableStream = fs.createWriteStream("hello.txt");
writableStream.write(" Hay hi! 1123");
writableStream.write(" abc!");
writableStream.write(" ajiscn!!!");
writableStream.write(" trying some shiet!!");
writableStream.end(" Ending of writableStream.");
var readableStream = fs.createReadStream("hello.txt", "utf8");*/


//chunk - это кусок данных из потока. На переменную потока вешается слушатель on, который использует эвент data. 
//data это событие, когда поток передаёт кусок данных потребителю (мне)
/*readableStream.on("data", (chunk)=>{
    console.log(chunk);
});*/

//Здесь испоьзуется эвент readable. Вызывается тогда, когда есть данные в потоке, которые можно считать
/*readableStream.on('readable',()=>{
    console.log(`readable: ${readableStream.read()}`);
} );*/

//Pipe
var readableStream = fs.createReadStream("hello.txt", "utf8");
var writableStream = fs.createWriteStream("some.txt");

//Запись данные из одного потока в другой
/*readableStream.on("data", function(chunk){
    writableStream.write(chunk);
});*/

//Аналог верхнему эвенту, но с использованием Pipe
readableStream.pipe(writableStream);

//Библиотка для архивации
var zlib = require("zlib");
//создаём переменную, которая хранит поток для записи архива
var writableStreamgz = fs.createWriteStream("hello.txt.gz");
//создаём переменную, которая отвечает за сжатие данных для архива
var gzip = zlib.createGzip();

//Сначала сжимаем данные, а затем зсоздаём архив. Каждый метод pipe() возвращает поток для чтения
readableStream.pipe(gzip).pipe(writableStreamgz);

http.createServer(function(request,response){
    response.writeHead(200,{"Content-type":"text/plain; charset=utf-8;"});
    console.log(message);
    response.end(message);

   /* console.log("Начало работы программы");
    displaySync("Обработка данных...");
    console.log("Завершение работы программы");*/

    //Вывод асинхронного выполнения
    /*display("Обработка данных...", function (err,data){
        if (err) throw err;
        console.log(data);
    });
    console.log("Завершение программы");*/

}).listen(3000, "127.0.0.1",()=>{
    console.log("Сервер начал прослушивание запросов");
});