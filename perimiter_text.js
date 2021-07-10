// Perimiter text

const matrix = [
    'xooxo',
    'xooxo',
    'oooxo',
    'xxoxo',
    'oxooo',
];

function perimiter(matrix) {  // O(N*N)
    let p = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === 'x') {
               p += j === 0 || matrix[i][j - 1] === 'o';
               p += i === 0 || matrix[i - 1 ][j] === 'o';
               p += i === matrix.length - 1 || matrix[i + 1 ][j] === 'o';
               p += j === matrix[i].length - 1 || matrix[i][j + 1] === 'o';
            }
        }
    }

    return p;
}


console.log(perimiter(matrix));
