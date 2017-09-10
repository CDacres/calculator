alert('Welcome to the JS Calculator! \nClick OK to get started.');
var action = prompt('Please select which calculation to perform: \nFor Addition, please enter "a". \nFor Subtraction, please enter "s". \nFor Addition, please enter "a". \nFor Multplication, please enter "m". \nFor Division, please enter "s". \nFor squaring a number, please enter "sq". \nFor Powers, please enter "p". \n').toLowerCase();
if (action==='a') {
	var number1 = parseFloat(prompt('You have selected Addition. \n Please enter your first number.'));
	var number2 = parseFloat(prompt('Please enter your second number'));
	var result = number1 + number2;
	alert('Your result is: \n' + number1 + ' + ' + number2 + ' = ' + result);
} else if (action==='s') {

} else if (action==='m') {

} else if (action==='d') {

} else if (action==='sq') {

} else if (action==='p') {

} else {
	alert('Error. You did not enter one of the possible commands. \nPlease refresh the page to try again');
}