// Assignment Code

var charChoice = function() {

    //numbers

var charNum = prompt('Should password contain numbers?');

if (charNum) {
    charnum = "0123456789";}
        else {
            charNum = "";}

    //special characters

    var speChar = prompt('Should password contain special characters?');

if (speChar) {
    speChar = "+*&^%$#@!";}
        else {
            speChar = "";}

    //lowercase

    var charLow = prompt('Should password contain lowercase letters?');

if (charLow) {
    charLow = "abcdefghijklmnopqrstuvwxyz";}
        else {
            charLow = "";}

    //uppercase

    var charUpp = prompt('Should password contain uppercase letters?');

if (charUpp) {
    charUpp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";}
        else {
            charUpp = "";}

    //concatenates all chosen fields

var charString = charNum + speChar + charLow + charUpp

//validate criteria - at least one value type selected


















//     }
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    console.log("HTML works; button is working");

    return "PLACEHOLDER: generated password.;"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)