//All tasks are expected to have a typed arguments/props and return types
//Use a regular expression to do the tasks/perform the validation etc
//Hint: you might want to know about .replace, .match, .test

/*
Write a function that takes a string and returns true if it is a valid email address and false otherwise. 
isEmail();
*/

function isEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

console.log(isEmail("test@example.com"));
console.log(isEmail("invalid-email"));


/*
Write a function that takes a string and returns an array of all the digits in that string.
getDigits();
*/
function getDigits(input: string): string[] {
    const digitRegex = /\d/g;
    return input.match(digitRegex) || [];
  }

console.log(getDigits("abc123def456"));
console.log(getDigits("no digits here!"));


/*
Write a function that takes a string and returns a new string where all whitespace characters are replaced with hyphens.
replaceWhitespace();
*/
function replaceWhitespace(input: string): string {
    return input.replace(/\s+/g, '-');
  }

console.log(replaceWhitespace("Hello World! How are you?"));
console.log(replaceWhitespace("  Multiple   spaces   here  "));
  

/*
Write a function that takes a string and returns true if it is a strong password and false otherwise. A strong password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.
isStrongPassword();
*/
function isStrongPassword(password: string): boolean {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

console.log(isStrongPassword("Password1!"));
console.log(isStrongPassword("weakpass"));


/*
Write a function that takes a string and returns an array of all dates in the format YYYY-MM-DD.
getDates();
*/
function getDates(input: string): string[] {
    const dateRegex = /\b\d{4}-\d{2}-\d{2}\b/g;
    return input.match(dateRegex) || [];
  }

console.log(getDates("Today is 2023-10-05, and tomorrow will be 2023-10-06."));
console.log(getDates("No dates here!"));



