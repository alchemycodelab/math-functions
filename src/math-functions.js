/* eslint-disable no-unused-vars */

// X Problem 1

export function sum(a, b) {
    let addend = a + b;
    return [addend, `The sum of ${a} and ${b} is ${addend}.`];
}

// X Problem 2

export function multiply(a, b) {
    let product = a * b;
    return [product, `The product of ${a} and ${b} is ${product}.`];
}

// X Problem 3

export function sumAndMultiplyThreeNumbers(a, b, c) { //eslint-disable-line
    let sum1 = sum(a, b)[0];
    let addend = sum(sum1, c)[0];
    let ans1 = multiply(a, b)[0];
    let product = multiply(ans1, c)[0];
    return [addend, product, `${a} and ${b} and ${c} sum to ${addend}.`, `The product of ${a} and ${b} and ${c} is ${product}.`];
}

// X Problem 4

export function sumArrayWithThreeNumbers(sumArr) {
    let addend = 0;
    let numString = sumArr.join();
    for (let num of sumArr) {
        addend = sum(addend, num)[0];
    }
    return [addend, `${numString} was passed in as an array of numbers, and ${addend} is their sum.`];
}

// X Problem 5

export function multiplyArrayWithThreeNumbers(multArr) { //eslint-disable-line
    let product = 1;
    let numString = multArr.join();
    for (let num of multArr) {
        product = multiply(product, num)[0];
    }
    return [product, `The numbers ${numString} have a product of ${product}.`];
}

// X Problem 6 stretch

export function multiplyAnyArray(dynamicArray) { //eslint-disable-line
    let product = 1;
    let numString = dynamicArray.join();
    for (let num of dynamicArray) {
        product = multiply(product, num)[0];
    }
    return [product, `The numbers ${numString} have a product of ${product}.`];
}
