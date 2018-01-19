var webpage = require("webpage");
var p = webpage.create();
p.open("https://www.baidu.com/",function (s) {
    console.log(s)
})