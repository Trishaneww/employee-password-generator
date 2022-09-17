let generateBtn = document.querySelector("#generate");

// ASCII, American Standard Code for Information Interchange. is a 7-bit character code where every single bit refers to a unique character.
// Each ASCII character is grouped into a variable which generates an Array
const specialChar1 = generateChar(33, 48);
const specialChar2 = generateChar(58, 65);
const specialChar3 = generateChar(91, 97);
const specialChar4 = generateChar(123, 127);
const allSpecialChar = specialChar1.concat(specialChar2,specialChar3,specialChar4); //Conactinates all special characters in ASCII into one array
const upperCase = generateChar(65, 91);
const lowerCase = generateChar(97, 123);
const numbers = generateChar(48, 58);


let passwordLength; // Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password"); //Identifies and selects the #password ID in the HTML file
  passwordText.value = password; //Enables the value of passwordText to the generated passworded in this javascript file
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Prompts the user to select their desired character count, for their password
function generatePassword() {
  passwordLength = prompt("How many characters long do you want your password to be? A strong password required 8-128 characters!");

  // If the users selection satisfies the parameters, the createPassword() function will run
  if (passwordLength >= 8 && passwordLength <= 128) {
    return createPassword();
  // Otherwise, the user wil be asked if they would like to select again
  // If they choose ok, they will be able to select a character count again
  // If they choose cancel, they will be greeted by a departing message, and the  popup window will close
  } else {
    if (
      confirm("You entered an invalid length! Would you like to try again?")
    ) {
      generatePassword();
    } else {
      alert('We hope to see you again!');
    }
  }
}

//createPassword will prompt user through the password preference selections then proceeds to combine the ASCII characters that has been assigned from earlier into an array.
//Then Math.random() will pick randomly through the array and attach itself to the empty string for the final password.
function createPassword() { //createPassword is the function called from within generatePassword if all parameters are satisfied
  let selectUpper;
  let selectLower;
  let selectNum;
  let selectSpecial;
  let combinedArray = [];
  let password = '';

// Gives the user a selection of options to include in password
// User can choose to include lowercase, uppercase, numeric, or special characters in their password
// combinedArray will concatinate the corresponding values of each selected character type into itself
selectUpper = confirm('Would you prefer to include uppercase values in your password?');
if (selectUpper) {
  combinedArray = combinedArray.concat(upperCase);
}
selectLower = confirm('Would you prefer to include lowercase values in your passsword?');
if (selectLower) {
  combinedArray = combinedArray.concat(lowerCase);
}
selectNum = confirm('Would you prefer to include numbers in your password?');
if (selectNum) {
  combinedArray = combinedArray.concat(numbers);
}
selectSpecial = confirm('Would you prefer to include special characters in your password?');
if (selectSpecial) {
  combinedArray = combinedArray.concat(allSpecialChar);
}

// This for loop will select a random character found within combinedArray and add it to password
// This looping process will continue until password has a length of the users desired password length (passwordLength)
for (let i = 0; i < passwordLength; i++) {
  password = password.concat(combinedArray[Math.floor(Math.random() * combinedArray.length)] 
  );
}
  return password; //returns the password 
}

// When the user clicks on the "Generate Password" button, all code above will run
function generateChar(startIndex, endIndex) {
  let charArray = [];
  for (let i = startIndex; i < endIndex; i++) {
    charArray.push(String.fromCharCode(i));
  }
  return charArray;
}
