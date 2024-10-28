const getSumOfNumbers = (...numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0);
}
const nums = [1, 2, 3, 4, 5];
const result = getSumOfNumbers(...nums);

console.log("Result of sum:", result);
