// our API is going to GET Quotes

// function that takes no arguments
// instantiates at index 0 which we have set as the staring point
// the result is set to be the index of the quotes
// increment the index
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

function getNextQuote() {
  // put the quote in to return a function
  const result = quotesData[index];
  //set the quote index
  index += 1;
  //ensures the API always return a whole number value
  index = index % quotesData.length;
  // log the result to
  console.log('this is the result', result);
  return result;
}

// quote to add function
// that takes in quotesData
//
function addQuote(quoteData) {
  quotesData.push(quoteData);
  return true;
}

// a module needs to be imported into another script
module.exports = { getNextQuote, addQuote };
