function troubleshooting() {
	const a = 1;
	const b = 1;

	let result;

	// Edit between these lines
	// =================================
    // What happens here is that string "ab" is returned
    // instead of the number 2 this is due to the types of the 
    // variables converting into strings rather than continuing to treat them as a number
	result = "a" + "b";

	// =================================

	return result;
}

// Do not change this 
module.exports = troubleshooting;




function troubleshooting_after() {
	const a = 1;
	const b = 1;

	let result;

	// Edit between these lines
	// =================================
    // The change here is very simple to just remove the quotation marks to make the
    // the numbers be treated as a number instead of a string.
	result = a + b;

	// =================================

	return result;
}
