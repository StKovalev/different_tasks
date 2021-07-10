// Multiply
// multiply(4,5) - 20
// multiply(1,2,3,4,5) -
// 1 * 2 * 3 * 4 * 5 = 120
// multiply(2,0,4,2)
// 2 + 0 * 4 * 2 = 16

function multiply() {
    const args = [...arguments];
    const res = args.reduce((total, elem) => {
        return elem ? elem * total : elem + total;
    }, 1);
    
    return res;
}

console.log(multiply(1,2,3,4,5));
console.log(multiply(0,1,2,3,4,5));
console.log(multiply(0,1,2,0,3,4,5,0));


const multiplyStringFunc = (...args) => args.reduce((total, elem) => elem ? elem * total : elem + total, 1);  

console.log(multiplyStringFunc(1,2,3,4,5));
console.log(multiplyStringFunc(0,1,2,3,4,5));
console.log(multiplyStringFunc(0,1,2,0,3,4,5,0));
