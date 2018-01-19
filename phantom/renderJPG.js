var webPage = require('webpage');
var page = webPage.create();

page.viewportSize = { width: 1920, height: 1080 };
page.open("http://www.baidu.com", function start(status) {
    page.render('baidu.jpeg', {format: 'jpeg', quality: '100'});
    phantom.exit();
});