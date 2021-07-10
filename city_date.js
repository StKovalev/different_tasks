// City date concerts

const dateConcerts = {
    'Москва': new Date('2020-04-01'),
    'Казань': new Date('2022-07-02'),
    'Владивосток': new Date('2020-04-21'),
    'Калининград': new Date('2022-07-15'),
    'Омск': new Date('2020-04-18'),
    'Питер': new Date('2022-07-10'),
}

function dateConcertsToArray(dateConcerts) {
    return Object.keys(dateConcerts)
        .filter(city => dateConcerts[city] > new Date())        // O(n)
        .sort((a, b) => dateConcerts[a] - dateConcerts[b]);     // O(N*log2n)
}

console.log(dateConcertsToArray(dateConcerts));