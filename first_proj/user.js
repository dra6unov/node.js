/*var os = require("os");
var greeting = require("./greeting");

var userName = os.userInfo().username;

var userHi = require("./userName.js");

var dra6unov = new userHi("Ivan", 22);
dra6unov.sayHi();

var greeting1 = require("./greeting");
console.log(`Hello, ${greeting.name}`);

var greeting2 = require("./greeting");
greeting2.name="Bob";

console.log(`Hello, ${greeting1.name}`);
console.log(`Hello, ${greeting2.name}`);

console.log(`Дата запроса: ${greeting.Date}`);
console.log(greeting.getMessage(userName));

var welcome = require("./welcome");

welcome.getMorningMessage();
welcome.getEveningMessage();*/

var greet = require("./greet");

global.name = "Ivan";

global.console.log(date);
console.log(greet.getMessage());

global.console.log(name);