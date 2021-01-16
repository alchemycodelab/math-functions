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

    const sumNumber = a + b;
    const finalString = `The sum of ${a} and ${b} is ${sumNumber}.`;

    let finalArray = [sumNumber, finalString];

    return finalArray;
    
}

//
// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."
*/

export function multiply(a, b) {

    const multiNum = a * b;
    const multiString = `The product of ${a} and ${b} is ${multiNum}.`;

    let multiArray = [multiNum, multiString];

    return multiArray;
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

export function sumAndMultiplyThreeNumbers(a, b, c) { 
    
    const sumOne = sum(a, b)[0];
    const sumFinal = sum(sumOne, c)[0];

    const multiTwo = multiply(a, b)[0];
    const multiFinal = multiply(multiTwo, c)[0];

    const stingThree = `${a} and ${b} and ${c} sum to ${sumFinal}.`;
    const stingFour = `The product of ${a} and ${b} and ${c} is ${multiFinal}.`;

    let resultarray = [sumFinal, multiFinal, stingThree, stingFour];

    return resultarray;
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

    const sumNum = sum(sum(sumArr[0], sumArr[1])[0], sumArr[2])[0];
    const sumString = `${sumArr[0]},${sumArr[1]},${sumArr[2]} was passed in as an array of numbers, and ${sumNum} is their sum.`;
    
    let resultArray = [sumNum, sumString];
    
    return resultArray;
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

    const multiNumber = multiply(multiply(multArr[0], multArr[1])[0], multArr[2])[0];
    const multiString = `The numbers ${multArr[0]},${multArr[1]},${multArr[2]} have a product of ${multiNumber}.`;
    
    let finalArray = [multiNumber, multiString];
    
    return finalArray;
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
    
    let i;
    let resultArray;
    let resultNumber;
    let resultString;
    let lengthDyn = dynamicArray.length;

    if(lengthDyn === 1){

        resultArray = [dynamicArray[0], `The numbers ${dynamicArray[0]} have a product of ${dynamicArray[0]}.`];
        return resultArray; 

    } else {

        resultNumber = multiply(dynamicArray[0], dynamicArray[1])[0];
        resultString = `${dynamicArray[0]},${dynamicArray[1]}`;

        for(i = 2; i < lengthDyn; i++){
            resultNumber = multiply(dynamicArray[i], resultNumber)[0];
            resultString = `${resultString},${dynamicArray[i]}`;
        }
    }
    resultString = `The numbers ${resultString} have a product of ${resultNumber}.`;
    resultArray = [resultNumber, resultString];
    return resultArray;
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// You're done! Submit the link to the repo following the instructions in Canvas.
