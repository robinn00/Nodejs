var fs = require("fs");
var txt = fs.readFileSync("package.json");
console.log(txt.toString());
console.log("over");