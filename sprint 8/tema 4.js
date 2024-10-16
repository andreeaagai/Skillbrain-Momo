
const vocals = "aeiouAEIOU";

function counterVocals(text) {

    let counter = 0;

    for (let char of text) {     
        if (vocals.includes(char)) {
            counter ++;
        } 
    }
  return counter;
}

text = counterVocals("String de test");
console.log("The number of vowels is: " + text);