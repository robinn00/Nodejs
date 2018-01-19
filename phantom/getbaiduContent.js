var webpage = require('webpage');
var page = webpage.create();
page.open('http://www.baidu.com/', function (status) {
    var data;
    if (status === 'fail') {
        console.log('fail');
    } else {
        console.log(page.content);
    }
    page.close();
    phantom.exit();
});