/* eslint-disable no-unused-vars */

/////////////////////////////////////
/* Problem 1

Write a function called sum() that takes in two numbers as arguments and 
then returns an array where the first element is the sum of those numbers, 
and the second element is a concatenated string that EXACTLY follows this 
example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."
*/

export function sum(a, b) {
    // let numbers = [];
    // for (let i = 0; i < arguments.length; ++i) numbers[i] = arguments[i];

    // const a = numbers[0];
    // const b = numbers[1];
    const sumNumber = (Number(a) + Number(b));
    return [sumNumber, `The sum of ${a} and ${b} is ${sumNumber}.`];
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."
*/

export function multiply(a, b) {
    // let numbers = [];
    // for (let i = 0; i < arguments.length; ++i) numbers[i] = arguments[i];

    // const a = numbers[0];
    // const b = numbers[1]; 
    const productNumber = (Number(a) * Number(b));
    return [productNumber, `The product of ${a} and ${b} is ${productNumber}.`];
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

export function sumAndMultiplyThreeNumbers(a, b, c) { //eslint-disable-line
    // let numbers = [];
    // for (let i = 0; i < arguments.length; ++i) numbers[i] = (arguments[i]);

    // const a = numbers[0];
    // const b = numbers[1];
    // const c = numbers[2];
    const sumNumber = (Number(a) + Number(b) + Number(c));
    const productNumber = (Number(a) * Number(b) * Number(c));
    const newArray = [sumNumber, productNumber, `${a} and ${b} and ${c} sum to ${sumNumber}.`, `The product of ${a} and ${b} and ${c} is ${productNumber}.`];
    console.log(newArray);
    return newArray;
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
    const num1 = sumArr[0];
    const num2 = sumArr[1];
    const num3 = sumArr[2];

    const sum1 = sum(num1, num2)[0];
    const sum2 = sum(sum1, num3)[0];
    const newArray = [sum2, `${num1},${num2},${num3} was passed in as an array of numbers, and ${sum2} is their sum.`];
    return newArray;
    // const newSum = sum(sumArr[0], sumArr[1], sumArr[2]);
    // const newArray = [newSum, `${sumArr[0]},${sumArr[1]},${sumArr[2]} was passed in as an array of numbers, and ${newSum} is their sum.`];
    // console.log(newSum);
    // console.log(newArray);
    // return newArray;
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
    let product = dynamicArray[0];

    for(let i = 0; i < dynamicArray.length; i++) {
        product = multiply(product, dynamicArray[i])[0];
    }
    
    const newArray = [product, `The numbers ${dynamicArray} have a product of ${product}.`];
    return newArray;
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// You're done! Submit the link to the repo following the instructions in Canvas.
