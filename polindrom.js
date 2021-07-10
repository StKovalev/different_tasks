// Polindrom
// qwertyytrewq - true;
// sadadsqweqwe - false;

function polindrom(word) {
    word = word.toLowerCase();
    for (let i = 0; i < word.length / 2; i++) {
        if(word[i] !== word[word.length - i - 1]){
            return false;
        }
    }

    return true;
}

console.log(polindrom('qwertyytrewq'));
console.log(polindrom('sadadsqweqwe'));

function polindromShort(word) {
    word = word.toLowerCase();
    return word === word.split('').reverse().join('');
}

console.log(polindromShort('qwertyytrewq'));
console.log(polindromShort('sadadsqweqwe'));