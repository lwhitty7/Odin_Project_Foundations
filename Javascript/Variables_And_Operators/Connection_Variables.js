let name_test = "John";
let surname = "Doe";
// If its a single word then the variable will be crossed out in the Editors
// Due to it being considers a global variable
console.log(name_test + " " + surname);


const pi = 3.14;
// pi = 10;

// This will cause an error due to variable pi being a const and can not be reassigned
// due to nature of javascript
console.log(pi);

console.log((3 + 2) - 76 * (1 + 1))