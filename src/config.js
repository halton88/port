//Lets require/import the HTTP module
var path = require('path');
var http = require('http');
var fs = require('fs');

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

    if (page.indexOf("html") > -1)
        fs.readFile(page, interpretPage);
    else if (page.indexOf("css") > -1)
        fs.readFile(page, interpretStyle);
    else if (page.indexOf("js") > -1)
        fs.readFile(page, interpretScript);

    function interpretPage(error, data) {
        if (error) {
            res.writeHead(404, {
                "Content-type": "text/plain"
            });
            res.end("Sorry the page was not found");
        } else {
            res.writeHead(202, {
                "Content-type": "text/html"
            });
            res.end(data);
        }
    }

    function interpretStyle(error, data) {
        if (error) {
            res.writeHead(404, {
                "Content-type": "text/plain"
            });
            res.end("Sorry the page was not found");
        } else {
            res.writeHead(202, {
                "Content-type": "text/stylesheet"
            });
            res.end(data);
        }
    }

    function interpretScript(error, data) {
        if (error) {
            res.writeHead(404, {
                "Content-type": "text/plain"
            });
            res.end("Sorry the page was not found");
        } else {

            res.writeHead(202, {
                "Content-type": "text/javascript"
            });
            res.end(data);
        }
    }

});

server.listen(PORT, HOST, function () {
    console.log("Listening " + HOST + ":" + PORT);
});
