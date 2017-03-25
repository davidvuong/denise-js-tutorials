var http = require('http');
var url = require('url');

var PORT = 8080;

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function getRandomNumber() {
  return parseInt(Math.random() * 100).toString();
}

function handleRequest(req, res){
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
  
  var pathname = url.parse(req.url).pathname;
  if (pathname === '/random-color') {
    return res.end(getRandomColor());
  } else if (pathname === '/random-number') {
    return res.end(getRandomNumber());
  } else if (pathname === '/random-color-or-number') {
    var type, value;
    if (Math.random() > 0.5) {
      type = 'number';
      value = getRandomNumber();
    } else {
      type = 'color';
      value = getRandomColor();
    }
    res.writeHead(200, { 'Content-Type': 'text/json' });
    res.write(JSON.stringify({ type: type, value: value }));
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found\n');
    res.end();
  }
}

var server = http.createServer(handleRequest);
server.listen(8080, function () {
  console.log('Server listening on: http://localhost:' + PORT);
});
