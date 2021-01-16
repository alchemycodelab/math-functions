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
    const sumArray = [];
    if(arguments.length === 2){ 
        const a = arguments[0];
        const b = arguments[1];
        const sum = a + b;
        sumArray.push(sum);
        sumArray.push(`The sum of ${a} and ${b} is ${sum}.`);
        return sumArray;
    } else if(arguments.length === 3) {
        const a = arguments[0];
        const b = arguments[1];
        const c = arguments[2];
        const sum = a + b + c;
        return sum;
  
   
    }
}
//   let s = 0;
   
//     for(let i = 0; i < arguments.length; i++) {
//         s += arguments[i];  
//     }

//     return [a + b, `The sum of ${a} and ${b} is ${a + b}.`];
   
//     //return 
// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."
*/

export function multiply(a, b) {
    let product = 1;
    for(let i = 0; i < arguments.length; i++) {
        product = product * arguments[i];    
    }
    return [product, `The product of ${a} and ${b} is ${product}.`];
    

}

    // const productArray = [];
    // if(arguments.length === 2){ 
    //     const a = arguments[0];
    //     const b = arguments[1];
    //     const product = a * b;
    //     productArray.push(product);
    //     productArray.push(`The product of ${a} and ${b} is ${product}.`);
    //     return productArray;
    // } else if(arguments.length === 3) {
    //     const a = arguments[0];
    //     const b = arguments[1];
    //     const c = arguments[2];
    //     const product = a * b * c;
    //     return product;
    // } 

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

export function sumAndMultiplyThreeNumbers(number1, number2, number3) { //eslint-disable-line
    
    
    const result1 = sum(number1, number2, number3);
    const result2 = multiply(multiply(number1, number2)[0], number3)[0];
    return [result1, result2, `${number1} and ${number2} and ${number3} sum to ${result1}.`, `The product of ${number1} and ${number2} and ${number3} is ${result2}.`];
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
    const var1 = sumArr[0];
    const var2 = sumArr[1];
    const var3 = sumArr[2];
    const arrSum = sum(var1, var2, var3);

    return [arrSum, `${var1},${var2},${var3} was passed in as an array of numbers, and ${arrSum} is their sum.`];


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

export function multiplyArrayWithThreeNumbers(multiArr) { //eslint-disable-line
   
    const product1 = multiply(multiArr[0], multiArr[1])[0];
    const product2 = multiply(product1, multiArr[2])[0];
    
    // const var1 = multiArr[0];
    // const var2 = multiArr[1];
    // const var3 = multiArr[2];
    // const arrProduct = multiply(multiply(multiArr[0], multiArr[1])multiArr[2]

    return [product2, `The numbers ${multiArr} have a product of ${product2}.`];
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
  
    let product = 1;

    for(const dynamicEl of dynamicArray) {
        product = multiply(dynamicEl, product)[0];
    }
    return [product, `The numbers ${dynamicArray} have a product of ${product}.`];
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// You're done! Submit the link to the repo following the instructions in Canvas.
