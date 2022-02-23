# git-init-mod3-challenge
** Description:  **

A password generator based on user feedback.

## Worklow/Key-Functions
1. Prompts for user to include that will generate an accurate password.
	1. Length Prompt: (8 >= val <= 128), Default = 8, Validation: function validateLengthVal(), Mandatory to proceed through workflow.
	2. Lower-Case Confirm: Simple yes/no
	3. Upper-Case Confirm: Simple yes/no
	4. Number Confirm: Simple yes/no
2. Given user feedback = Object pwdOptions;
	1. A key array with true values is created
	2. Creation of each character is processed using password length and random value of key array using: function buildPwd(pwdCriteria). 
3. Validation of generated password = function validatePwd(passVal, arr).
	1. Given arr = options used to generate password
	2. And passVal = password generated
	3. Then arr is iterated to independently check that user feedback is met
	4. If password does not meet user feedback: buildPwd(pwdCriteria) is recursively called until feedback met
	5. Else password is set to display in GUI.

### Objective Evidence
![Example Picture](/assets/images/example-pic.png?raw=true "Here is an example!")
[Try it yourself!](https://dolomiteson.github.io/git-init-mod3-challenge/)
