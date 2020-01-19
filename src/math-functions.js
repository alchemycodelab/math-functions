/* eslint-disable no-unused-vars */

/////////////////////////////////////
/* Problem 1

Write a function called sum() that takes in two numbers as arguments and 
then returns an array where the first element is the sum of those numbers, 
and the second element is a concatenated string that EXACTLY follows this 
example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."
*/

export function sum(numberOne, numberTwo) {
    const sumOfNumbers = numberOne + numberTwo;
    const sumArray = [sumOfNumbers, `The sum of ${numberOne} and ${numberTwo} is ${sumOfNumbers}.`];

    return sumArray;
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."
*/

export function multiply(numberOne, numberTwo) {
    const productOfNumbers = numberOne * numberTwo;
    const productArray = [productOfNumbers, `The product of ${numberOne} and ${numberTwo} is ${productOfNumbers}.`];

    return productArray;
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiplyThreeNumbers() that takes in three 
numbers as separate arguments and returns 
an array where the first element is the sum of those three numbers, 
the second element is the product of those three numbers,  
and the third and fourth elements are strings that EXACTLY follow this example and 
use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. 
To do addition, use your sum() function, and to do multiplication, use your multiply() 
function that you've already created. You're going to have to be resourceful to figure out 
how to do this. However, you may continue to use the + operator for string concatenation.
*/

export function sumAndMultiplyThreeNumbers(numberOne, numberTwo, numberThree) { //eslint-disable-line
    const sumOfTwo = sum(numberOne, numberTwo);
    const sumOfThree = sum(sumOfTwo[0], numberThree);
    const sumOfThreeValue = sumOfThree[0];
    const sumOfThreeString = `${numberOne} and ${numberTwo} and ${numberThree} sum to ${sumOfThreeValue}.`;


    const productOfTwo = multiply(numberOne, numberTwo);
    const productOfThree = multiply(productOfTwo[0], numberThree);
    const productOfThreeValue = productOfThree[0];
    const productOfThreeString = `The product of ${numberOne} and ${numberTwo} and ${numberThree} is ${productOfThreeValue}.`;

    const sumAndProductArray = [sumOfThreeValue, productOfThreeValue, sumOfThreeString, productOfThreeString];
    
    return sumAndProductArray;
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArrayWithThreeNumbers() that takes in an array of numbers 
as its single argument and then returns an array where the first element is the sum 
of the numbers in the array, and the second element is a string that EXACTLY follows 
this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. 
To do addition, use your sum() function that you've already created. You're going to 
have to be resourceful to figure out how to do this. However, you may continue 
to use the + operator for string concatenation.
*/

export function sumArrayWithThreeNumbers(sumArr) {
    const numberOne = sumArr[0];
    const numberTwo = sumArr[1];
    const numberThree = sumArr[2];

    const sumOfTwo = sum(numberOne, numberTwo);
    const sumOfTwoValue = sumOfTwo[0];

    const sumOfThree = sum(sumOfTwoValue, numberThree);
    const sumOfThreeValue = sumOfThree[0];
    const sumOfThreeString = `${numberOne},${numberTwo},${numberThree} was passed in as an array of numbers, and ${sumOfThreeValue} is their sum.`;

    const sumOfThreeArray = [sumOfThreeValue, sumOfThreeString];

    return sumOfThreeArray;
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArrayWithThreeNumbers() that takes an array of numbers 
as its argument and returns an array whose first element is the product of those numbers, 
and the second element is a string that EXACTLY follows this example and uses the values 
that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. 
To do multiplication, use your multiply() function that you've already created. 
You're going to have to be resourceful to figure out how to do this. 
This function should handle an array containing three elements. However, 
you may continue to use the + operator for string concatenation.
*/

export function multiplyArrayWithThreeNumbers(multArr) { //eslint-disable-line
    const numberOne = multArr[0];
    const numberTwo = multArr[1];
    const numberThree = multArr[2];

    const productOfTwo = multiply(numberOne, numberTwo);
    const productOfTwoValue = productOfTwo[0];

    const productOfThree = multiply(productOfTwoValue, numberThree);
    const productOfThreeValue = productOfThree[0];
    const productOfThreeString = `The numbers ${numberOne},${numberTwo},${numberThree} have a product of ${productOfThreeValue}.`;

    const sumOfThreeArray = [productOfThreeValue, productOfThreeString];

    return sumOfThreeArray;

}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.
*/

export function multiplyAnyArray(dynamicArray) { //eslint-disable-line
    // eslint-disable-next-line no-empty
    let productOfArray = 1;
    
    for(let i = 0; i < dynamicArray.length; i++) {
        productOfArray = multiply(productOfArray, dynamicArray[i])[0];
    }
    const productString = `The numbers ${dynamicArray} have a product of ${productOfArray}.`;
    const multiplyAnyArray = [productOfArray, productString];

    return multiplyAnyArray;
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// You're done! Submit the link to the repo following the instructions in Canvas.
