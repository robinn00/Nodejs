var fs = require("fs");
fs.readFile("npm-debug.log",function (err,data) {
    if(err){
        console.log(err.toString())
    }else{
        console.log(data.toString());

    }
});

console.log("over");