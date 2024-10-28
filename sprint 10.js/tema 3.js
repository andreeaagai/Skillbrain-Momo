const str = "Vreau să lucrez în IT";
const letterForCount = "r";

function findTheLetterCount(string, letter) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if(string[i] === letter) {
            count ++;
        }
    }
    return count;
}
const countLetterInString = findTheLetterCount(str.toLowerCase(), letterForCount);
console.log(`In the next string: "${str}" => The letter "${letterForCount}" appears ${countLetterInString} time.`);
