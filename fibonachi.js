// Fibonachi
// 1, 1, 2, 3, 5, 8, 13 ...
// f(n) = f(n-1) + f(n-2)

function fibonachi(n) {
    if (n <= 0) {
        return 0;
    }

    if (n <= 2) {
        return 1;
    }

    return fibonachi(n - 1) + fibonachi(n - 2);
}

console.log(fibonachi(5));
console.log(fibonachi(7));

function fibonachiIteration (n) {
    if (n <= 0) {
        return 0;
    }

    if (n <= 2) {
        return 1;
    }

    let prev = 1;
    let res = 1; 
    
    for(let i = 0; i < n - 2; i++) {
        let temp = res;
        res += prev;
        prev = temp;
    }

    return res;
}

console.log(fibonachiIteration(5));
console.log(fibonachiIteration(7));