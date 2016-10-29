// Простой сервер-заглушка
var request = require('request');
var http = require('http');
var url = require('url');
var PORT = 8000;
//var key = 'trnsl.1.1.20161028T120152Z.94ab51ea0740d44f.3d564cb2e3ddee7dbe7c793e9a6813ed930fe19a' // Порт открытия сервера

http.createServer(function(req, res)  {
   
    var inEng = url.parse(`http://${req.headers.host}${req.url}`, true).path.slice(1) || '';
    var answer = '<b>Enter english word after localhost:8000/ !</b>';

    res.writeHead(200, {'Content-Type': 'text/html'});
    request(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20161028T120152Z.94ab51ea0740d44f.3d564cb2e3ddee7dbe7c793e9a6813ed930fe19a&lang=en-ru&text=${inEng}`, function(error, response, body) {
                var inRus = JSON.parse(body).text;
                res.write(`${answer}</br>`);
                res.write(`English => ${inEng}<br/>Русский => ${inRus}`);
                res.end();
     });
})
  .listen(PORT, function () {
    console.log("Let's get started with port: ", PORT);
});


