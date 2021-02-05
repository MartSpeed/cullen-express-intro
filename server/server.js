// if we put (DONT USE) ./ it will look for a node module in express and import that folder
const express = require('express');
//console.log('express', express);

// import the quotes module
const quotes = require('./modules/qoutes');

// create our app
//app becomes and object that can call express
const app = express();

// use port as a variable
const port = 5000;

// INCANTATION
// share any files inside the public folder
// this line is a path to a file
// static meaning they are not being loaded
app.use(express.static('server/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// listen for network request
// using the variable named "app" to let us know what functions we will be using
// with the express library under the app name using the dot operator
// we setup a listener that listens to http request so it can do something
app.listen(port, function () {
  // when the server is ready, call this function
  console.log('im listening', port);
});

// setting up a new route using the get() argument
// tells the server to get that value
// tell your server when youre done and when to send this information
// GET ENDPOINT
app.get('/quotes', function (req, res) {
  console.log('GET request for quotes');
  res.send(quotes.getNextQuote());
});

// adding a new quote, using the "POST" method
// the "POST" method takes a path name, "/quotes"
// can also be written as an arrow function, check notes
// POST ENDPOINT
app.post('/quotes', function (req, res) {
  // we are receiving a request in
  // inside this request there is an object called quote_to_add
  // quote_to_add contains the authors and quote information
  // then we are going to add this information to our quote list
  let quote = req.body.quote_to_add;
  console.log(quote.author);
  console.log(quote.quote);

  // add to the quotesData
  quotes.addQuote(quote);
  // then respond with something
  res.sendStatus(200);
});
