const getRandom = (start, end) => {
    const random = Math.random() * (end - start) + start;
    const randomInt = Math.floor(random);
    
    return randomInt;
}
const randomNumber = getRandom(3, 5);
console.log(randomNumber);