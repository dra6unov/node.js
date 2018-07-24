function Name(name, age){
    this.name = name;
    this.age = age;
    this.displayInfo = function(){
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
    }
}

Name.prototype.sayHi = function(){
    console.log(`Привет, меня зовут ${this.name}`);
};

module.exports = Name;
