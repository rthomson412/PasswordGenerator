// Assignment Code

var charChoice = function() {

    //numbers

var charNum = confirm('Should password contain numbers?');

if (charNum) {
    charnum = "0123456789";}
        else {
            charNum = "";}

    //special characters

    var speChar = confirm('Should password contain special characters?');

if (speChar) {
    speChar = "+*&^%$#@!";}
        else {
            speChar = "";}

    //lowercase

    var charLow = confirm('Should password contain lowercase letters?');

if (charLow) {
    charLow = "abcdefghijklmnopqrstuvwxyz";}
        else {
            charLow = "";}

    //uppercase

    var charUpp = confirm('Should password contain uppercase letters?');

if (charUpp) {
    charUpp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";}
        else {
            charUpp = "";}

    //concatenates all chosen fields

var charString = charNum + speChar + charLow + charUpp


// validates that at least one character type is selected
if (charString.length > 0) {
    console.log("Character string is " + charString);
    return charString;
  } else {
    window.alert("Please choose at least one type of character.");
    return charChoice();
  }
}

var generatePassword = function() {
  
    // setting character length
    var charLength = prompt('How long would you like your password to be?  Please enter a number between "8" and "128".');
    charLength = parseInt(charLength);
    console.log('Character length is ' + charLength);
    
    if (isNaN(charLength) || charLength < 8 || charLength > 128) {
      return generatePassword();
    }
  
    // generates password based on selected criteria
    var charSet = charChoice();
    var PASSWORD = "";
    
    for (var i = 0, n = charSet.length; i < charLength; i++) {
      PASSWORD += charSet[Math.floor(Math.random() * n)];
    }
    console.log("Generated password is " + PASSWORD);
    
    return PASSWORD;
  }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



















// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);