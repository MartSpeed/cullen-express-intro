// our API is going to GET Quotes

// function that takes no arguments
// instantiates at index 0 which we have set as the staring point
// the result is set to be the index of the quotes
// increment the index
//
function getNextQuote() {
  // retrieve a quote from an array
  let index = 0;
  const quotesData = [
    {
      quote:
        "I'm not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.",
      author: 'Emma Watson',
    },
    {
      quote:
        "Remember there's no such thing as a small act of kindness. Every act creates a ripple with no logical end.",
      author: 'Scott Adams',
    },
    {
      quote: 'Intelligence plus character-that is the goal of true education.',
      author: 'Martin Luther King, Jr.',
    },
  ];

  // put the login in to return a function
  const result = quotesData[index];
  //set the index
  index += 1;
  //ensures the API always return a value
  index = index % quotesData.length;
  // log the result to
  return console.log('this is the result', result);
  //return result;
}

// a module needs to be imported into another script
module.exports = getNextQuote;
