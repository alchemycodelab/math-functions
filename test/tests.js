import './math-functions.test.js';
 //let sum = [4, 7,]


export function add(someNumber) {
    let add = 0;
    for(let i = 0; i < someNumber.length; i++) {
        const someNumber = someNumber[i];
        add = add += someNumber;
    }
    return add;
}
