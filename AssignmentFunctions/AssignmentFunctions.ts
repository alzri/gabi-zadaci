/* Write a function that takes two strings as an argument, and returns a combined string 
combineStrings(a: string, b: string);
*/

type stringWords = {
    first: string;
    second: string;
};

const combinedString = ({first, second}: stringWords) => {
    return first + second;
};

const combinedStringSentence = combinedString({first: "Ovo je", second: " test!"});
console.log(combinedStringSentence);




/* Write a function that returns true if the division result of two given numbers is 3, false otherwise, null if the numbers are not divisible 
divisibleByThree(a: number, b: number);
*/

type divisionNumbers = {
    a: number;
    b: number;
};

const divisibleByThree = ({a, b}: divisionNumbers) => {
    if ( b === 0 ) {
        return null;
    } else if ( a / b == 3 ) {
        return true;
    } else {
        return false;
    }
};

const divisionByThreeResult = ({a: 10, b: 3});
console.log(divisionByThreeResult);


/* Write a function that calculates the sum of all array elements using the shorthand assignment 'operator' for addition +=
arraySum(arr: number[]);
*/

const arraySum = (numbersArray: number[]) => {
    let sum = 0;
    for ( let x = 0; x < numbersArray.length; x++) {
      sum += numbersArray[x]; 
    };
    return sum;
  };
  
  const numbersArray = [1, 2, 3, 4, 5];
  console.log(arraySum(numbersArray));



/* Write a function that calculates the result of subtracting all elements of an array from the first element using the shorthand assignment 'operator' for subraction 
subtractFromFirst(arr: number[]);
*/

const arraySubtract = (numbersArray: number[]) => {
    let difference = numbersArray[0];

    for (let x = 1; x < numbersArray.length; x++) {
        difference -= numbersArray[x];
    };

    return difference;
};

const numberArray = [1, 3, 5, 10, 11];
console.log(arraySubtract(numberArray));







