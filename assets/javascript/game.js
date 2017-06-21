//These are my Global Variables
//It is important that I define them outside of the function.
//Side note: Remember that you can call on global variables within a function,
//but you can't call on local variables outside of a function.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
//This is an array that houses all possible letters.
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var guessesSoFar = [];
//This is a variable that randomly generates a number that will be used to call on a specific letter in the alphabet
var randomNumber = Math.floor(Math.random() * 26);
console.log(randomNumber);
//I created a function called psychic with a parameter known as event
function psychic(event) {
	document.getElementById("randomNumber").innerHTML = "Computer generated this random number:" + " " + randomNumber;
	var computerLetter = alphabet[randomNumber];
	document.getElementById("computerLetter").innerHTML = "Computer generated this letter:" + " " + computerLetter;
	//This creates a variable, x, that will run event.which first
	//Because event.which is jQuery my browser might see it as undefined
	//In that case it will use event.keyCode which is native to javascript
	//Remember that || means or, if event.which runs true it won't look at event.keyCode
	//If it doesn't find event.which it will state it as undefined and make the boolean value false
	//Because the first parameter is false, the operator returns the second parameter's value.
	//Alas, the event.which and event.keyCode evaluate the HTML code for the key that was pressed
	var x = event.which || event.keyCode;
	//Javascript uses the DOM framework. Document Object Model
	//This is why it understands "document" as being the index.html (because in our html the javascript is linked)
	//getElementById is known as the method as to which it is going to "talk" to the HTML.
	//innerHTML is known as the property. The property is a value that you can get or set (like changing the content of an HTML element)
	//The innerHTML property can be used to get or change any HTML element, including <html> and <body>.
	document.getElementById("htmlCode").innerHTML = "HTML Code:" + " " + x;
	//Because the HTML Code values for letters a to z range from 97 to 122 I subtract them by 97 so they can match the value of our array if we were to call on a specific index value.
	var alphabetNumber = x - 97;
	document.getElementById("letterPlace").innerHTML = "Alphabet Number:" + " " + alphabetNumber;
	//This matches the alphabet number with the correct letter by using that value as the index number for our alphabet array 
	var userLetter = alphabet[alphabetNumber];
	document.getElementById("userLetter").innerHTML = "You chose the following letter:" + " " + userLetter;
	if (userLetter == computerLetter) {
		console.log("Success");
		wins = wins + 1;
		document.getElementById("wins").innerHTML = "Wins:" + " " + wins;
		randomNumber = Math.floor(Math.random() * 26);
		console.log(randomNumber);
	}
	else {
		console.log("Failure");
		guessesLeft = guessesLeft - 1;
		document.getElementById("guessesLeft").innerHTML = "Guesses Left:" + " " + guessesLeft;
		guessesSoFar.push(" " + userLetter);
		document.getElementById("yourGuessesSoFar").innerHTML = "Your Guesses so far:" + " " + guessesSoFar;
		if (guessesLeft == 0) {
			losses = losses + 1;
			document.getElementById("losses").innerHTML = "Losses:" + " " + losses;
			guessesLeft = 9;
			document.getElementById("guessesLeft").innerHTML = "Guesses Left:" + " " + guessesLeft;
			guessesSoFar = [];
			document.getElementById("yourGuessesSoFar").innerHTML = "Your Guesses so far:" + " " + guessesSoFar;
			randomNumber = Math.floor(Math.random() * 26);
			console.log(randomNumber);
			document.getElementById("randomNumber").innerHTML = "Computer generated this random number:" + " " + randomNumber;
			document.getElementById("computerLetter").innerHTML = "Computer generated this letter:" + " " + computerLetter;
		}
	}
}