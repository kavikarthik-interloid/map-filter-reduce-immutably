// 1) Immutable operation with numbers using reduce()
const numbers = [1,5,6,8,10,23,5];

const totalCount = numbers.reduce((total ,currentvalue) => total + currentvalue)
console.log(totalCount);

// 2) immutable operation with characters using reduce()
const characters = ["k","a","v","i","n"];
const fullname = characters.reduce( (totalLetters, currentLetter) => totalLetters + currentLetter);

console.log(fullname);