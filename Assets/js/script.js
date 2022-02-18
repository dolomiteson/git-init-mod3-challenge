// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  // Password Length Prompt
  var pwdLength = validateLengthVal(); 

  // Password Lower Case?
  var isLower = confirm("Should your password include lower-case characters?"); 
  
  // Password Upper Case?
  var isUpper = confirm("Should your password include upper-case characters?");
  // Password Number?
  var isNumber = confirm("Should your password include numbers?");
  // Password Special Char?
  var isSpecialChar = confirm("Should your password include special characters?");
  
  return pwdLength;
}


/** Function to make sure length is a valid input **/
function validateLengthVal() {
  var lenVal = prompt("Please enter a valid password length (8-128) characters.", "8");

  lenVal = parseInt(lenVal);

  if(lenVal < 8 || lenVal > 128 || isNaN(lenVal) === true ){
    lenVal = "Cannot proceed without the proper length, try again!";
    return lenVal;
  }
    return lenVal
}
