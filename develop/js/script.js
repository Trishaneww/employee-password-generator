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

// prompts the user to select their desired character count, for their password
function generatePassword() {
  passwordLength = window.prompt("How many characters long do you want your password to be? A strong password required 8-128 characters!");

  // If the users selection satisfies the parameters, the createPassword() function will run
  if (passwordLength >= 8 && passwordLength <= 128) {
    return createPassword();
  // Otherwise, the user wil be asked if they would like to select again
  // If they choose ok, they will be able to select a character count again
  // If they choose cancel, they will be greeted by a departing message, and the  popup window will close
  } else {
    if (
      window.confirm("You entered an invalid length! Would you like to try again?")
    ) {
      generatePassword();
    } else {
      window.alert('We hope to see you again!');
    }
  }
}
//createPassword will be called in the generatePassword() once all error checking is met.
//createPassword will prompt user through the password preference selections then proceeds to combine the ASCII characters that has been assigned from earlier into an array.
//Then Math.random() will pick randomly through the array and attach itself to the empty string for the final password.
function createPassword() {
  let upperSelect;
  let lowerSelect;
  let numSelect;
  let specialSelect;
  let combinedArray = [];
  let password = '';

  upperSelect = window.confirm('Would you prefer to include uppercase values in your password?');
  lowerSelect = window.confirm('Would you prefer to include lowercase values in your passsword?');
  numSelect = window.confirm('Would you prefer to include numbers in your password?');
  specialSelect = window.confirm('Would you prefer to include special characters in your password?');

  if (upperSelect) {
    combinedArray = combinedArray.concat(upperCase);
  }
  if (lowerSelect) {
    combinedArray = combinedArray.concat(lowerCase);
  }
  if (numSelect) {
    combinedArray = combinedArray.concat(numbers);
  }
  if (specialSelect) {
    combinedArray = combinedArray.concat(allSpecialChar);
  }
  console.log(combinedArray);
  for (let i = 0; i < passwordLength; i++) {
    password = password.concat(combinedArray[Math.floor(Math.random() * combinedArray.length)]
    );
  }
  return password;
}

// This function creates an array with every selected ASCII character
// Math.random() randomly chooses characters from this array
function generateChar(startIndex, endIndex) {
  let charArray = [];
  for (let i = startIndex; i < endIndex; i++) {
    charArray.push(String.fromCharCode(i));
  }
  return charArray;
}
