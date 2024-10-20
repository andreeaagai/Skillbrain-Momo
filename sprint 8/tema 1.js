const numbers = [];
let n = 10;

    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            numbers.push(i);
        }
    }

console.log("The next numbers is even = " + numbers);