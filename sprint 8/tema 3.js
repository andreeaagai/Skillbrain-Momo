// Exemplul 1:

const array = [1, -5, 20, -34, 16, 29, 36, -4];

function arrayReverse(array) {

    return array.reverse();
    
}

console.log(arrayReverse(array));

// Exemplul 2:

const array2 = [1, -5, 20, -34, 16, 29, 36, -4];
const numbersReverse = [];

function arrayReverse2(numbersReverse) {

    for (let i = array2.length -1; i >= 0; i--) {

        numbersReverse.push(array2[i]);
    }

    return numbersReverse;
}

console.log(arrayReverse2(numbersReverse));
