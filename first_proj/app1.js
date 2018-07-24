//Запуск приложения с передачей параметров при вводе данных

var nodePath = process.argv[0];
var appPath = process.argv[1];
var name = process.argv[2];
var age = process.argv[3];

console.log("nodePath: " + nodePath);
console.log("appPath: " + appPath);
console.log();
console.log("name: " + name);
console.log("age: " + age);