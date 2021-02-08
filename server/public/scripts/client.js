// client.js
console.log('in client.js');

// start jQuery
$(document).ready(onReady);

// run jQuery
function onReady() {
  console.log('jQuery');

  // jQuery functions

  /**
   * grab the data from the server
   *  GET /allTheQuotes
   *  return an array
   *  take array of quotes
   *  loop though them
   * .append() them to the DOM
   */

  // this is the long hand method to source $.ajax() using a variable method
  // let ajaxOptions = {
  //   url: '/allTheQuotes',
  //   method: 'GET',
  // };

  // set the ajax function using the variable path object
  // shorthand $.ajax() will have the variable data put directly into the $.ajax() function call
  $.ajax({
    url: '/allTheQuotes',
    method: 'GET',
  })
    // using the .then() method to get a response from the GET function
    .then(function (quoteList) {
      console.log('got a response', quoteList);
      //let quoteList = response;
      for (let quote of quoteList) {
        quote = $('#insert_quote').append(`
        <li>
        ${quote.quote}, ${quote.author}
        </li>`);
      }
    });
}
