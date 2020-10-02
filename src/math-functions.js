/* eslint-disable no-unused-vars */

export function sum(a, b) {

    let returnSum = a + b;
    let returnString = `The sum of ${a} and ${b} is ${returnSum}.`;
    return [returnSum, returnString];
}



export function multiply(a, b) {
    let returnProduct = a * b;
    let returnString = `The product of ${a} and ${b} is ${returnProduct}.`;
    return [returnProduct, returnString];

}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!


export function sumAndMultiplyThreeNumbers(a, b, c) { //eslint-disable-line
    let returnSum = sum(sum(a, b)[0], c)[0];
    let returnProduct = multiply(multiply(a, b)[0], multiply(1, c)[0])[0];
    let returnSumString = `${a} and ${b} and ${c} sum to ${returnSum}.`;
    let returnProductString = `The product of ${a} and ${b} and ${c} is ${returnProduct}.`;
    return [returnSum, returnProduct, returnSumString, returnProductString];
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!



export function sumArrayWithThreeNumbers(sumArr) {
    let returnSum = sum(sum(sumArr[0], sumArr[1])[0], sumArr[2])[0];
    let returnString = `${sumArr[0]},${sumArr[1]},${sumArr[2]} was passed in as an array of numbers, and ${returnSum} is their sum.`;
    return [returnSum, returnString];
    

}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!



export function multiplyArrayWithThreeNumbers(multArr) { //eslint-disable-line
    let returnProduct = multiply(multiply(multArr[0], multArr[1])[0], multArr[2])[0];
    let returnString = `The numbers ${multArr[0]},${multArr[1]},${multArr[2]} have a product of ${returnProduct}.`;
    return [returnProduct, returnString];
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.



export function multiplyAnyArray(dynamicArray) { //eslint-disable-line
    let returnProduct = 1;
    let returnString = 'The numbers ';

    if(dynamicArray.length % 2 === 0) {
        for(let i = 0; i < dynamicArray.length; i += 2){
            returnProduct *= multiply(dynamicArray[i], dynamicArray[i + 1])[0];
            returnString += dynamicArray[i] + ',' + dynamicArray[i + 1] + ',';
        }
    } else {
        for(let i = 0; i < dynamicArray.length - 1; i += 2){
            returnProduct *= multiply(dynamicArray[i], dynamicArray[i + 1])[0];
            returnString += dynamicArray[i] + ',' + dynamicArray[i + 1] + ',';

        }
        returnProduct *= dynamicArray.slice(-1)[0];
        returnString += dynamicArray.slice(-1)[0];
    }
    returnString += ` have a product of ${returnProduct}.`;
    return [returnProduct, returnString];


}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// You're done! Submit the link to the repo following the instructions in Canvas.
