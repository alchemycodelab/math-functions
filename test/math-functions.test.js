import { 
    sum, 
    multiply, 
    sumAndMultiplyThreeNumbers, 
    sumArrayWithThreeNumbers, 
    multiplyArrayWithThreeNumbers, 
    // multiplyAnyArray
} from '../src/math-functions.js';

const test = QUnit.test;

/* DO NOT MODIFY THIS FILE */

test('sum', (assert) => {
    const result = sum(4, 7);

    assert.equal(result[0], 11);
    assert.equal(result[1], 'The sum of 4 and 7 is 11.');
});

test('multiply', (assert) => {
    const result = multiply(5, 9);

    assert.equal(result[0], 45);
    assert.equal(result[1], 'The product of 5 and 9 is 45.');
});

test('sumAndMultiplyThreeNumbers', (assert) => {
    const result = sumAndMultiplyThreeNumbers(4, 7, 5);

    assert.equal(result[0], 16);
    assert.equal(result[1], 140);
    assert.equal(result[2], '4 and 7 and 5 sum to 16.');
    assert.equal(result[3], 'The product of 4 and 7 and 5 is 140.');
});

test('sumArrayWithThreeNumbers', (assert) => {
    const result = sumArrayWithThreeNumbers([2, 3, 4]);

    assert.equal(result[0], 9);
    assert.equal(result[1], '2,3,4 was passed in as an array of numbers, and 9 is their sum.');
});

test('multiplyArrayWithThreeNumbers', (assert) => {
    const result = multiplyArrayWithThreeNumbers([2, 3, 4]);

    assert.equal(result[0], 24);
    assert.equal(result[1], 'The numbers 2,3,4 have a product of 24.');
});

// test('multiplyAnyArray', (assert) => {
//     const result = multiplyAnyArray([1, 2, 3, 4, 5]);

//     assert.equal(result[0], 120);
//     assert.equal(result[1], 'The numbers 1,2,3,4,5 have a product of 120.');
// });
