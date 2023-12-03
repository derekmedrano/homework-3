// Assignment Code
var generateBtn = document.querySelector("#generate");

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


	if (!lowercaseQuestion && !uppercaseQuestion && !numberQuestion && !specialCharacterQuestion) {
		alert("Password requirement not met.")
		return;
	}
	var password = ''
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

	for (var i = 0; i < lengthQuestion; i++) {
	password.concat(random(finalString))
	}
	
	return password
}

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}




function random(arr) {

	return arr[Math.floor(Math.random() * arr.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);