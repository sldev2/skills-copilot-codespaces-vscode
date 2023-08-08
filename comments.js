// create web server
var http = require('http');
// file system
var fs = require('fs');
// create server
http.createServer(function (request, response) {
  // content header
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });
  // response
  // response.end('Hello World!');
  // send index.html
  fs.readFile('index.html', function (err, contents) {
    // display index.html
    response.write(contents);
    response.end();
  });
  // send comments.html
  fs.readFile('comments.html', function (err, contents) {
    // display comments.html
    response.write(contents);
    response.end();
  });
  // send members.html
  fs.readFile('members.html', function (err, contents) {
    // display members.html
    response.write(contents);
    response.end();
  });
  // send skills.html
  fs.readFile('skills.html', function (err, contents) {
    // display skills.html
    response.write(contents);
    response.end();
  });
  // send skills.js
  fs.readFile('skills.js', function (err, contents) {
    // display skills.js
    response.write(contents);
    response.end();
  });
  // send members.js
  fs.readFile('members.js', function (err, contents) {
    // display members.js
    response.write(contents);
    response.end();
  });
  // send comments.js
  fs.readFile('comments.js', function (err, contents) {
    // display comments.js
    response.write(contents);
    response.end();
  });
  // send style.css
  fs.readFile('style.css', function (err, contents) {
    // display style.css
    response.write(contents);
    response.end();
  });
  // send logo.png
  fs.readFile('logo.png', function (err, contents) {
    // display logo.png
    response.write(contents);
    response.end();
  });
  // send favicon.ico
  fs.readFile('favicon.ico', function (err, contents) {
    // display favicon.ico
    response.write(contents);
    response.end();
  });
  // send package.json
  fs.readFile('package.json', function (err, contents) {
    // display package.json
    response.write(contents);
    response.end();
  });
  // send README.md
  fs.readFile('README.md', function (err, contents) {
    // display README.md 