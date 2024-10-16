// Exemplul 1:

const numbers1 = [1, -5, 20, -34, 16, 29, 36, -4];
let sum = 0;

for ( let i = 0; i < numbers1.length; i++) {
 
  sum += numbers1[i];
 
}

console.log("The sum of the numbers (" + numbers1 + ") is equals with => " + sum);

// Exemplul 2:

const numbers2 = [3.45, -2.68, 356, -75.96, 64, 19.28];

function calculateSum(numbers2) {

  return numbers2.reduce((sum, number) => sum + number, 0);
}

const sum2 = calculateSum(numbers2);

console.log("The sum of the numbers (" + numbers2 + ") is equals with => " + sum2);

