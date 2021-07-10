// Without repeat element
// Возвращать только уникальные элементы

const arr = [1,1,2,2,2,3,3,4,5,5,9,9,6,]; 

function withoutRepeatElement(arr) {  // O(N*N)
    const res = [];
    
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count ++;
            }            
        }

        if (count === 1) {
            res.push(arr[i]);
        }
    }

    return res;
}

console.log(withoutRepeatElement(arr));

function withoutRepeatElementLinear(arr) {  // O(n)
    const res = [];
    const dict = {};
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        dict[item] = dict[item] ? dict[item] + 1 : 1;
    }

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (dict[item] === 1) {
            res.push(item);
        }
    }

    return res;
}

console.log(withoutRepeatElementLinear(arr));