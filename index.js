var express = require('express');
// const ChromeLauncher = require('chrome-launcher');
var app = express();
var router = require('./router/main')(app);
let port = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

var server = app.listen(port, function () {
    console.log("Express server has started on port " + port)
});


// ChromeLauncher.launch({
//     startingUrl: 'http://localhost:3000'
// }).then(chrome => {
//     console.log(`Chrome debugging port running on ${chrome.port}`);
// });


