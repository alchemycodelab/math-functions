//Problem One
export function sum(a, b) {
    const sumOfAPlusB = (a + b);
    const sumConcatenated = (`The sum of ${a} and ${b} is ${sumOfAPlusB}.`);

    const sumArray = [sumOfAPlusB, sumConcatenated];
    return sumArray;
}


//Problem Two
export function multiply(a, b) {
    const productOfAPlusB = (a * b);
    const productConcatenated = (`The product of ${a} and ${b} is ${productOfAPlusB}.`);

    const productArray = [productOfAPlusB, productConcatenated];
    return productArray;
}


//Problem Three

export function sumAndMultiplyThreeNumbers(a, b, c) { 
    const addTwoNumbers = sum(a, b);
    const addThirdValue = sum(addTwoNumbers[0], c);
    const sumOfThreeNumbers = addThirdValue[0];

    const multiplyTwoNumbers = multiply(a, b);
    const multiplyThirdValue = multiply(multiplyTwoNumbers[0], c);
    const productOfThreeNumbers = multiplyThirdValue[0];

    const thirdElement = (`${a} and ${b} and ${c} sum to ${sumOfThreeNumbers}.`);
    const fourthElement = (`The product of ${a} and ${b} and ${c} is ${productOfThreeNumbers}.`);
    
    const sumAndMultiplyThreeArray = [sumOfThreeNumbers, productOfThreeNumbers, thirdElement, fourthElement];
    return sumAndMultiplyThreeArray;
}


//Problem Four

export function sumArrayWithThreeNumbers(sumArr) {
    const addTwo = sum(sumArr[0], sumArr[1]);
    const sumOfTwoNumbers = addTwo[0];

    const addThree = sum(sumOfTwoNumbers, sumArr[2]);
    const sumOfThreeNumbers = addThree[0];

    const arrayItemTwo = (`${sumArr[0]},${sumArr[1]},${sumArr[2]} was passed in as an array of numbers, and ${sumOfThreeNumbers} is their sum.`);    

    const arrayWithThreeNumbers = [sumOfThreeNumbers, arrayItemTwo];
    return arrayWithThreeNumbers;
}


//Problem Five

export function multiplyArrayWithThreeNumbers(multArr) { 
    const multiplyTwo = multiply(multArr[0], multArr[1]);
    const productOfTwoNumbers = multiplyTwo[0];

    const multiplyThree = multiply(productOfTwoNumbers, multArr[2]);
    const productOfThreeNumbers = multiplyThree[0];

    const arrayString = (`The numbers ${multArr[0]},${multArr[1]},${multArr[2]} have a product of ${productOfThreeNumbers}.`);    

    const multiplyArrayWithThreeNumbers = [productOfThreeNumbers, arrayString];
    return multiplyArrayWithThreeNumbers;
}

//Problem Six

export function multiplyAnyArray(dynamicArray) { 
   
    let product = 1;

    for(let i = 0; i < dynamicArray.length; i++) {
        product = multiply(product, dynamicArray[i])[0];
    }
        
    const stringSix = (`The numbers ${dynamicArray[0]},${dynamicArray[1]},${dynamicArray[2]},${dynamicArray[3]},${dynamicArray[4]} have a product of ${product}.`);    

    const multiplyAnyArrayOutput = [product, stringSix];

    return multiplyAnyArrayOutput;   

}