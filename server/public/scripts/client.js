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
  // this function contains the client data to be sent to the server
  $.ajax({
    url: '/allTheQuotes',
    method: 'GET',
  })
    // using the .then() method to get a response from the GET function
    .then(function (quoteList) {
      console.log('got a response', quoteList);
      // take array of loops
      //loop d' loop through em
      for (let quote of quoteList) {
        $('#insert_quote').append(`
        <li>
        <blockquote>${quote.quote} by ${quote.author}</blockquote>
      </li>
        `);
      }
      // and .append() to the DOM
    });
}
