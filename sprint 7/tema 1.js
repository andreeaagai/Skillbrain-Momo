function isNumberDivByTen(number) {

    if (number % 10 === 0) {
        return (`The number ${number} is divided by 10.`);
    } else {
        return (`The number ${number} is not divided by 10.`);
    }
}


console.log(isNumberDivByTen(100));
// console.log(isNumberDivByTen(23));