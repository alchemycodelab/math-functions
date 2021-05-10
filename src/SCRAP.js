function sum(number1, number2) {
    const sum = number1 + number2;
    return [
        sum,
        `The sum of ${number1} and ${number2} is ${sum}`];
}

function sumArrayWithThreeNumbers(summArr) {
    let sumOfThree = 0;
    //sumOfThree = 6
    for(let num of summArr) {
        //num = 7, 
        sumOfThree = sum(sumOfThree, num)[0];
        //sum(6, 7)
    }
    return ([
        sumOfThree,
        `${summArr} was passed in as an array of numbers,and ${sumOfThree} is their sum`]);
}

console.log(sumArrayWithThreeNumbers([2, 3, 4]));

function multiply(a, b) {
    const product = a * b;
    return [
        product,
        `The product of ${a} and ${b} is ${product}.`];
}
function multiplyArrayWithThreeNumbers(multArr) { 
    //eslint-disable-line
    let multiplyThree = 1;
    //multiplyThree = 4
    for(let numm of multArr) {
        // numm = 5
        multiplyThree = multiply(multiplyThree, numm)[0];
    }   //product = 20
    return ([
        multiplyThree,
        `The numbers ${multArr}, have a product of ${multiplyThree}`
    ]);
}
console.log(multiplyArrayWithThreeNumbers([2, 2, 5]));