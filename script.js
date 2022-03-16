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