/*
Write a function that returns the sum of two positive numbers. In case the number(s) are negative, sum the absolute value(s) and return that. positiveSum(a, b)*/

type sumNumb = {
  a: number;
  b: number;
}

const positiveSum = ({a, b}: sumNumb) => {
  const x = a < 0 ? -a : a;
  const y = b < 0 ? -b : b;

  return x + y;
} 

const rijesenje = positiveSum({a: -10, b: -8});
console.log(rijesenje);




/*Write a function that subtracts two numbers and returns the result.
subtractNumbers(a, b)*/

const subtractsNumb = ({a, b}: sumNumb) => {
  return a - b;
}

const subRijesnje = subtractsNumb({a: 30, b: 10});
console.log(subRijesnje);




/*Write a function that multiplies two numbers and returns the result. In case the two numbers are the same, handle the multiplication using exponentiation. multiplyNumbers(a, b)*/

const multipliesNumb = ({a, b}: sumNumb) => {
  return a * b;
}

const multipliesRijesenje = ({a: 3, b: 10});
console.log(multipliesRijesenje);




/*Write a function that divides two numbers and returns the result as an object containing the rounded result as well as the result with decimal places rounded to 2. 
divide(a, b)
Example 1:
result = {
  rounded: 2,
  widthDecimal: 2.34
}

divideResult = {
  rounded: roundedResult,
  withDecimal: withDecimalResult
}

return divideResult;

console.log(result.rounded) // logs 2 to the console
console.log(result.withDecimal) // logs 2.34 to the console

Example 2:
result = {
  rounded: 2,
  widthDecimal: 1.74
}
console.log(result.rounded) // logs 2 to the console
console.log(result.withDecimal) // logs 1.74 to the console */

function devideNumbers({a, b}) {
   const roundedNumbers = Math.round(a / b);
   const withDecimal = (a / b);

   return {
    rounded: roundedNumbers,
    withDecimal: withDecimal
   };

   const decimalResult = devideNumbers({a: 35.5, b: 10});
   const roundedResult = devideNumbers({a: 35.5, b: 10});

   console.log(decimalResult.withDecimal);
   console.log(roundedResult.rounded);
};




/*Write a function that returns the division remainder of two numbers. 
divisionRemainder(a, b)
*/

const divisionRemainder = ({a, b}: sumNumb) => {
  return a % b;
};

const divisionResault = divisionRemainder ({ a: 6, b: 10});
console.log(divisionResault);