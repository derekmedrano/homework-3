// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Prompts the user to supply the generator with criteria
function generatePassword() {
	var lengthQuestion = prompt("What is your desired password length? Must be 8 - 128 characters.")

	if (lengthQuestion < 8 || lengthQuestion > 128) {
		alert("Password length requirement not met.")
		return;
	}

	var lowercaseQuestion = confirm("Would you like to include lowercase letters?");
	var uppercaseQuestion = confirm("Would you like to include uppercase letters?");
	var numberQuestion = confirm("Would you like to include numbers?");
	var specialCharacterQuestion = confirm("Would you like to include special characters?");

// This conditional statement prevents the user from continuing the function without supplying any usable characters
	if (!lowercaseQuestion && !uppercaseQuestion && !numberQuestion && !specialCharacterQuestion) {
		alert("Password requirement not met.")
		return;
	}
// Variables are strings, which are later split into an array. The user's given criteria is added the the allChars variable, which later becomes the final generated password.
	var allChars = ''
	var lowercase = "abcdefghijklmnopqrstuvwxyz"

	var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

	var numbers = "1234567890"

	var symbols = "!@#$%^&*(){}[]=<>/,."

	if (lowercaseQuestion) {
		allChars = allChars + lowercase
	}
	if (uppercaseQuestion) {
		allChars = allChars + uppercase
	}
	if (numberQuestion) {
		allChars = allChars + numbers
	}
	if (specialCharacterQuestion) {
		allChars = allChars + symbols
	}

	var finalString = allChars.split('')

	var passwordArray=[];
// The password array is assigned values at random, and stops when the desired password length is reached.
	for (var i = 0; i < lengthQuestion; i++) {
	passwordArray.push(random(finalString));
	}
	
	return passwordArray.join('')
}
//This function selects a value from an array, at random.
function random(arr) {

	return arr[Math.floor(Math.random() * arr.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);