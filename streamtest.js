var fs = require("fs");
var dataStr = "";

var fsreader = fs.createReadStream("package.json");
fsreader.setEncoding("utf-8");
fsreader.on("data",function (data) {
    dataStr += data;
})

fsreader.on("end",function () {
    console.log(dataStr);
})

fsreader.on("error",function (err) {
    console.log("err: "+err.stack);
})

console.log("over");

exports.test = function () {
    console.log("test....")
}


function M() {
    this.add = function (a1,a2) {
        return parseInt(a1)+parseInt(a2);
    }
}
module.exports = M;
