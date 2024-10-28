const getSumOfNumbers = (...numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0);
}
const result = getSumOfNumbers(1, 2, 3, 4, 5);

console.log("Result of sum:", result);
