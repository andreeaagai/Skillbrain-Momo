
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


// let char2 = "String de test";

// function counterVocals(char2) {

// let counter2 = 0;

//     for (let i = 0; i < char2.length; i++) {    
            
//         if (char2[i] === 'a' || char2[i] === 'e' || char2[i] === 'i' || char2[i] === 'o' || char2[i] === 'u' || char2[i] === 'A' || char2[i] === 'E' || char2[i] === 'I' || char2[i] === 'O' || char2[i] === 'U') {
//             counter2 ++;
//         }
//     }

//     return counter2;
//   }
  
//   console.log(counterVocals(char2));
  