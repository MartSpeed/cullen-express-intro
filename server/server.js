// if we dont put ./ it will look for a node module in express and import that folder
const express = require('express');
//console.log('express', express);

// create our app
//app becomes and object that can call express
const app = express();

// use port as a variable
const port = 5000;

// listen for network requests
// this is a listener
// takes 3 arguments
/**
 * .listen() ARGUMENTS
 *
 * // are ports aligned with the 7 layers port numbers?
 *  1. ports = what port its connected to?
 *  2. function() = when the serve is ready, call this function
 */
app.listen(port, function () {
  // when the server is ready, call this function
  console.log('im listening', port);
});
