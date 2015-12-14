var path = require('path');
var http = require('http');
var fs = require('fs');
var mime = require('mime');

var PORT = 8099;
var HOST = 'localhost';

var server = http.createServer(function (req, res) {
    var page;
    console.log("Recieved req:" + req.url);

    if (req.url.indexOf("/resources") > -1)
        page = path.join("node_modules", req.url.replace("/resources",""));
    else if (req.url.indexOf("/web") > -1)
        page = path.join("..", req.url);
    else
        page = path.join("..", req.url, "web", "/", "index.html");

    console.log("Page: " + page);
    mime.lookup(page);

    fs.readFile(page, function (error, data) {
        if (error) {
            res.end("Sorry the page was not found");
        } else {
            res.end(data);
        }
    });

});

server.listen(PORT, HOST, function () {
    console.log("Listening " + HOST + ":" + PORT);
});
