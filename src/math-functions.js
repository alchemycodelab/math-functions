/* eslint-disable no-unused-vars */

/////////////////////////////////////
//Problem 1

export function sum(a, b) {
    return [a + b, `The sum of ${a} and ${b} is ${a + b}.`];
}


/////////////////////////////////////
// Problem 2

export function multiply(a, b) {
    return [a * b, `The product of ${a} and ${b} is ${a * b}.`];
}

/////////////////////////////////////
// Problem 3

export function sumAndMultiplyThreeNumbers(a, b, c) { 
    const num = sum(a, b)[0];
    const prod = multiply(a, b)[0];

    return [sum(num, c)[0], multiply(prod, c)[0], `${a} and ${b} and ${c} sum to ${a + b + c}.`, `The product of ${a} and ${b} and ${c} is ${a * b * c}.`];
}
/////////////////////////////////////
// Problem 4

export function sumArrayWithThreeNumbers([a, b, c]) {
    let num = sum(a, b)[0];
    let sumNum = sum(num, c)[0];
    return [sumNum, `${a},${b},${c} was passed in as an array of numbers, and ${a + b + c} is their sum.`];
}

/////////////////////////////////////
// Problem 5


export function multiplyArrayWithThreeNumbers([a, b, c]) {
    let num = multiply(a, b)[0];
    let productNum = multiply(num, c)[0];
    return [productNum, `The numbers ${a},${b},${c} have a product of ${a * b * c}.`];

}



/////////////////////////////////////
// STRETCH GOAL: Problem 6


    