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
  if(typeof pwdLength === "string"){
    return pwdLength;
  }

  // Password Lower Case?
  var isLower = confirm("Should your password mandatory include lower-case characters?"); 
  
  // Password Upper Case?
  var isUpper = confirm("Should your password mandatory include upper-case characters?");
  
  // Password Number?
  var isNumber = confirm("Should your password mandatory include numbers?");
  
  // Password Special Char?
  var isSpecialChar = confirm("Should your password mandatory include special characters?");

  // Build Password
  const pwdOptions = {pwdLenVal: pwdLength, loCase: isLower, hiCase: isUpper, num: isNumber, specChar: isSpecialChar};
  var pwdValue = buildPwd(pwdOptions);
  
  return pwdValue;
}


/** Function to make sure length is a valid input **/
function validateLengthVal() {
  var lenVal = prompt("Please enter a valid password length (8-128) characters.", "8");

  lenVal = parseInt(lenVal);

  if(lenVal < 8 || lenVal > 128 || isNaN(lenVal) === true ){
    lenVal = "Cannot proceed without the proper length, try again!";
    return lenVal;
  }
  return lenVal;
}

/** Function to build password based on selection **/
function buildPwd(pwdCriteria) {

  /* Variables*/
  let passwordVal = "";
  var keyArr= [];

  // Supplement array
  if(pwdCriteria.num === true){
    keyArr[keyArr.length] = "number";
  }

  if(pwdCriteria.loCase === true){
    keyArr[keyArr.length] = "lower";
  }

  if(pwdCriteria.hiCase === true){
    keyArr[keyArr.length] = "upper";
  }

  if(pwdCriteria.specChar === true){
    keyArr[keyArr.length] = "symbol";
  }

  // Return base password for empty array
  if(keyArr.length === 0){return "Password";}

  // Build Password
  for(index = 0; index < pwdCriteria.pwdLenVal; index++){
    // Pick random char type to include
    var charType = keyArr[Math.floor(Math.random() * keyArr.length)];

    if(charType === 'number'){
      passwordVal += Math.floor(Math.random() * 10);
    }

    if(charType === 'lower'){
      var min = 97;
      var max = 122;
      var unicodeVal = Math.floor(Math.random() * (max - min + 1)) + min;
      passwordVal += String.fromCharCode(unicodeVal);
    }

    if(charType === 'upper'){
      var min = 65;
      var max = 90;
      var unicodeVal = Math.floor(Math.random() * (max - min + 1)) + min;
      passwordVal += String.fromCharCode(unicodeVal);
    }

    if(charType === 'symbol'){
      var uCodeArr = [
        Math.floor(Math.random() * (47 - 33 + 1)) + 33,
        Math.floor(Math.random() * (64 - 58 + 1)) + 58,
        Math.floor(Math.random() * (91 - 96 + 1)) + 96,
        Math.floor(Math.random() * (126 - 123 + 1)) + 123
      ];

      var unicodeVal = uCodeArr[Math.floor(Math.random() * uCodeArr.length)];
      passwordVal += String.fromCharCode(unicodeVal);
    }
  }

  var isPwdGood = validatePwd(passwordVal, keyArr);

  if(isPwdGood !== true){
    passwordVal = buildPwd(pwdCriteria);
  }
  return passwordVal;
  
}

/* Function to validate all mandatory chars used*/
function validatePwd(passVal, arr) {

  // Variables
  var isNum = true;
  var isLo = true;
  var isHi = true;
  var isSym = true;

  // Iterate through mandatory fields
  for(index = 0; index < arr.length; index ++){
    var charType = arr[index];

    // Number validation
    if(charType === "number"){
      isNum = /\d/.test(passVal);
    }

    // Lower validation
    else if(charType === "lower"){
      isLo = /[a-z]/.test(passVal);
    }
    
    // Upper validation
    else if(charType === "upper"){
      isHi = /[A-Z]/.test(passVal);
    }

    // Symbol validation
    else{
      isSym = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(passVal);
    }
  }

  // All mandatory chars are present
  if(isNum !== false && isLo !== false && isHi !== false && isSym !== false){
    return true;
  }
  // Missing mandatory chars
  return false;
}