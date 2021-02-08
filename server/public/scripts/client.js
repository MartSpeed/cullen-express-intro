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
  let ajaxOptions = {
    url: '/allTheQuotes',
    method: 'GET',
  };
// set the ajax function using the variable path object
  $.ajax(ajaxOptions)
  // using the .then() method to get a response from the GET function
  .then(function(response) )
}
