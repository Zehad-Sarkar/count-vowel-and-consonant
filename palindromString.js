function isPalindrom(word) {
  const wrd = word.replace(/\s/g, "").toLowerCase();
  const reverseWord = wrd.split("").reverse().join("");
  //  return  reverseWord === wrd;
  if (reverseWord === wrd) {
    return console.log("palindrom");
  } else {
    return console.log("not palindrom");
  }
}
const result = isPalindrom("helo");
// console.log(result);
