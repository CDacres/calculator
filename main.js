alert('Welcome to the JS Calculator! \nClick OK to get started.');
var action = prompt('Please select which calculation to perform: \nFor Addition, please enter "a". \nFor Subtraction, please enter "s". \nFor Multplication, please enter "m". \nFor Division, please enter "d". \nFor squaring a number, please enter "sq". \nFor Powers, please enter "p". \n').toLowerCase();
if (action==='a') {
	var number1 = parseFloat(prompt('You have selected Addition. \n Please enter your first number.'));
	var number2 = parseFloat(prompt('Please enter your second number to add to the first.'));
	var result = number1 + number2;
	alert('Your result is: \n' + number1 + ' + ' + number2 + ' = ' + result);
} else if (action==='s') {
	var number1 = parseFloat(prompt('You have selected Subtraction. \n Please enter your first number.'));
	var number2 = parseFloat(prompt('Please enter your second number to subtract from the first.'));
	var result = number1 - number2;
	alert('Your result is: \n' + number1 + ' - ' + number2 + ' = ' + result);
} else if (action==='m') {
	var number1 = parseFloat(prompt('You have selected Multplication. \n Please enter your first number.'));
	var number2 = parseFloat(prompt('Please enter your second number to multiply the first by.'));
	var result = number1 * number2;
	alert('Your result is: \n' + number1 + ' x ' + number2 + ' = ' + result);
} else if (action==='d') {
	var number1 = parseFloat(prompt('You have selected Division. \n Please enter your first number.'));
	var number2 = parseFloat(prompt('Please enter your second number to divide the first by.'));
	var result = number1 / number2;
	alert('Your result is: \n' + number1 + ' / ' + number2 + ' = ' + result);
} else if (action==='sq') {
	var number1 = parseFloat(prompt('You have selected squaring a number. \n Please enter your number to square.'));
	var result = number1 * number1;
	alert('Your result is: \n' + number1 + ' ^ 2  = ' + result);
} else if (action==='p') {
	var number1 = parseFloat(prompt('You have selected Powers. \n Please enter your first number which will be the base.'));
	var number2 = parseFloat(prompt('Please enter your second number which will be the exponent.'));
	var result = Math.pow(number1, number2);
	alert('Your result is: \n' + number1 + ' ^ ' + number2 + ' = ' + result);
} else {
	alert('Error. You did not enter one of the possible commands. \nPlease refresh the page to try again');
}