var CurrentDate = new Date();

global.date = CurrentDate;

module.exports.getMessage = function(){
    var hour = CurrentDate.getHours();
    if(hour>16)
        return "Добрый вечер, " + global.name;
    else if(hour>10)
        return "Добрый день, " + name;
    else 
        return "Доброе утро, " + name;
}