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
    var elemone = a + b;
    var elemstring = 'The sum of ' + a + ' and ' + b + ' is ' + elemone + '.';
    return [elemone, elemstring];
}


// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."
*/

export function multiply(a, b) {
    var elemone = a * b;
    var elemstring = 'The product of ' + a + ' and ' + b + ' is ' + elemone + '.';
    return [elemone, elemstring];
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
    const sumone = sum(a, b)[0];
    const sumtwo = sum(c, 0)[0];
    const firstElem = sum(sumone, sumtwo)[0];
    const productone = multiply(a, b)[0];
    const producttwo = multiply(c, 1)[0];
    const secondElem = multiply(productone, producttwo)[0];
    const sentencePartOne = sum(a, ' and ')[0];
    const sentencePartTwo = sum(b, ' and ')[0];
    const sentencePartThree = sum(c, ' sum to ')[0];
    const sentencePartFour = sum(firstElem, '.')[0];
    const halfSentencePartOne = sum(sentencePartOne, sentencePartTwo)[0];
    const halfSentencePartTwo = sum(sentencePartThree, sentencePartFour)[0];
    const thirdElem = sum(halfSentencePartOne, halfSentencePartTwo)[0];
    const mSentencePartOne = sum('The product of ', a)[0];
    const mSentencePartTwo = sum(' and ', b)[0];
    const mSentencePartThree = sum(' and ', c)[0];
    const mSentencePartFour = sum(' is ', secondElem)[0];
    const mSentencePartFive = '.';
    const mHalfSentencePartOne = sum(mSentencePartOne, mSentencePartTwo)[0];
    const mHalfSentencePartTwo = sum(mSentencePartThree, mSentencePartFour)[0];
    const mAlmostDone = sum(mHalfSentencePartOne, mHalfSentencePartTwo)[0];
    const fourthElem = sum(mAlmostDone, mSentencePartFive)[0];

    // const thirdelem = a + ' and ' + b + ' and ' + c + ' sum to ' + firstelem + '.';
    // const fourthelem = 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + secondelem + '.';
    return [firstElem, secondElem, thirdElem, fourthElem];
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
    const sumOne = sum(sumArr[0], sumArr[1])[0];
    const sumTwo = sum(sumOne, sumArr[2])[0];
    const firstElem = sumTwo;
    const secondElem = sumArr[0] + ',' + sumArr[1] + ',' + sumArr[2] + ' was passed in as an array of numbers, and ' + sumTwo + ' is their sum.';

    return [firstElem, secondElem];

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
    const multOne = multiply(multArr[0], multArr[1])[0];
    const multTwo = multiply(multOne, multArr[2])[0];
    const firstElem = multTwo;
    const secondElem = 'The numbers ' + multArr[0] + ',' + multArr[1] + ',' + multArr[2] + ' have a product of ' + firstElem + '.';

    return [firstElem, secondElem];
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
    let array = [];
    let product = 1;
    let stringPartOne = 'The numbers ';
    let stringPartTwo = '';
    for(let i = 0; i < dynamicArray.length; i++) {
        product = multiply(product, dynamicArray[i])[0];
        if(i + 1 === dynamicArray.length) {
            stringPartTwo += dynamicArray[i];
        } else {
            stringPartTwo += dynamicArray[i] + ',';
        }
    }
    let stringPartThree = ' have a product of ' + product + '.';
    let secondElem = stringPartOne + stringPartTwo + stringPartThree;
    return [product, secondElem];
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// You're done! Submit the link to the repo following the instructions in Canvas.
