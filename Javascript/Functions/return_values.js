const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString); // Should print "The weather is warm"
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made



function random(number) {
    const result = Math.floor(Math.random() * number);
    return result;
  }
// This function calls a random number between 0 and 2
console.log(random(3));

