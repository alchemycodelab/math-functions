import { 
    sum, 
    multiply, 
    sumAndMultiplyThreeNumbers, 
    sumArrayWithThreeNumbers, 
    multiplyArrayWithThreeNumbers, 
    multiplyAnyArray
} from '../src/math-functions.js';

const test = QUnit.test;

/* DO NOT MODIFY THIS FILE */

test('when given a 4 and a 7  we expect it to returnan array with 11. ', (assert) => {
    const result = sum(4, 7);

    assert.equal(result[0], 11);
    assert.equal(result[1], 'The sum of 4 and 7 is 11.');
});

test('when given a 5 and a 9 we it expect it to return an array with 45', (assert) => {
    const result = multiply(5, 9);

    assert.equal(result[0], 45);
    assert.equal(result[1], 'The product of 5 and 9 is 45.');
});

test('when given 3 values we expect the sum of the values and the product of the values returned in a 4 element array', (assert) => {
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

test('multiplyAnyArray', (assert) => {
    const result = multiplyAnyArray([1, 2, 3, 4, 5]);

    assert.equal(result[0], 120);
    assert.equal(result[1], 'The numbers 1,2,3,4,5 have a product of 120.');
});
