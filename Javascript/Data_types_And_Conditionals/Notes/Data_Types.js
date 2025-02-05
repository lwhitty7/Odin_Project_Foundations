//Number 
let n = 123;
n = 12.345;

alert( 1 / 0 ); // Infinity
alert( Infinity ); // Infinity


// Bigint
// In JavaScript, the “number” type cannot safely represent integer values
//  larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992


// Strings are special
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

// Backticks are the only type of string that can be an embed other variabels