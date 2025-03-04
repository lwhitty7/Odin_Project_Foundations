/**
 * The code below tells the browser to ask you for a number
 * then if that number is `6`, it returns `true` otherwise it returns `false`
 * 
 * Change this code so it returns `true` when the number is greater than or equal to 10, and false if it is less than 10
 */

number = Number(prompt("enter a number"));


// This function to simply check if a number is greater or less than the number 10
// if was less than the number 10 than it would return as a false value however if it wasnt the case
// then it would return as a true value.
function numberChecker() {
	if (number >= 10) {
		return true;
	} else {
		return false;
	}
}
