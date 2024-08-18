// Returning the sum of two numbers

var add;
add = function (number1, number2) {
    var total = number1 + number2;
    return total;
};
var number1 = 50;
var number2 = 23;
var sum = add(number1, number2);
console.log("The sum of " + number1 + " and " + number2 + " is: " + sum);

var add3;

add3 = function (num1,num2,num3) {
	var total3 = num1+num2+num3;
	return total3;
}
var sum3 = add3(52,25,10);

console.log("The sum of three number 52+25+10 is:"+sum3);

/* Further Adventures
 *
 * 1) Find and display the sum of
 *    a different pair of numbers
 *
 * 2) Change the call to console.log so that
 *    the display on the console reads:
 *    'The sum of 50 and 23 is 73'
 *    using the add function to generate the answer.
 *
 * 3) Can you use the add function as it is
 *    to add more than two numbers?
 *    Hint: You can nest calls to add.
 *
 * 4) Create a function to return the sum of
 *    three numbers given as arguments.
 *
 */