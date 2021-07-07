/* eslint-disable no-unused-vars */

/////////////////////////////////////
export function sum(a, b) {
    const add = a + b;
    const sumSentence = `The sum of ${a} and ${b} is ${add}.`;
    const sumArray = [add, sumSentence];
    return sumArray;
}

export function multiply(a, b) {
    const mult = a * b;
    const multSentence = `The product of ${a} and ${b} is ${mult}.`;
    const multArray = [mult, multSentence];

    return multArray;
}

export function sumAndMultiplyThreeNumbers(a, b, c) { //eslint-disable-line
    const sumOfTwo = sum(a, b)[0];
    const sumOfThree = sum(sumOfTwo, c)[0];

    const multOfTwo = multiply(a, b)[0];
    const multOfThree = multiply(multOfTwo, c)[0];

    const sumMultArray = [sumOfThree, multOfThree, `${a} and ${b} and ${c} sum to ${sumOfThree}.`, `The product of ${a} and ${b} and ${c} is ${multOfThree}.`];
    return sumMultArray;
}

export function sumArrayWithThreeNumbers(sumArr) {

    const arraySum2 = sum(sumArr[0], sumArr[1])[0];
    const arraySum3 = sum(arraySum2, sumArr[2])[0];
    const arrayString = [arraySum3, `${sumArr[0]},${sumArr[1]},${sumArr[2]} was passed in as an array of numbers, and ${arraySum3} is their sum.`];
    return arrayString;
}

export function multiplyArrayWithThreeNumbers(multArr) { //eslint-disable-line
    const arrayMult2 = multiply(multArr[0], multArr[1])[0];
    const arrayMult3 = multiply(arrayMult2, multArr[2])[0];
    const arrayString = [arrayMult3, `The numbers ${multArr[0]},${multArr[1]},${multArr[2]} have a product of ${arrayMult3}.`];
    return arrayString;
}

export function multiplyAnyArray(dynamicArray) { //eslint-disable-line
    let accumulator = 1;

    for(let i = 0; i < dynamicArray.length; i++) { 
        accumulator = multiply(dynamicArray[i], accumulator)[0];
    }
    return [accumulator, `The numbers ${dynamicArray} have a product of ${accumulator}.`];
}
