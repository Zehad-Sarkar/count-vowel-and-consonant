//Write a code on how to calculate the number of vowels and consonants in a string?(Use Javascript only)

//code solve with an array
const arrayString = ["Hello World", "Hello Bangladesh", "Hello Developers"];
function countArrayVowelAndConsonant(arrayString) {
  const vowels = ["a", "e", "i", "o", "u"];
  let totalVowels = 0;
  let totalConsonants = 0;
  for (const array of arrayString) {
    const stringLowercase = array.toLowerCase();
    let countVowels = 0;
    let countConsonants = 0;
    for (const letter of stringLowercase) {
      if (vowels.includes(letter)) {
        countVowels++;
      } else {
        countConsonants++;
      }
    }
    totalVowels += countVowels;
    totalConsonants += countConsonants;
  }
  return { totalVowels, totalConsonants };
}
const result = countArrayVowelAndConsonant(arrayString);
console.log(result);

//code solve with an string
const string = "I Love My Country. My Country Name Is Bangladesh";
function countVowelsAndConsonant(str) {
  //lower case string
  const stringLowercase = str.toLowerCase();
  // defining vowels
  const vowels = ["a", "e", "i", "o", "u"];
  let countVowels = 0;
  let countConsonants = 0;
  for (let i = 0; i < stringLowercase.length; i++) {
    const char = stringLowercase[i];
    if (vowels.includes(char)) {
      countVowels++;
    } else if (char >= "a" && char <= "z") {
      countConsonants++;
    }
  }
  return { countVowels, countConsonants };
}
const counts = countVowelsAndConsonant(string);
console.log(counts);
