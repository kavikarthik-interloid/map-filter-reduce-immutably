//immutable with numbers
const input = [1,5,6,8,10,23,5];

const total = input.reduce((a,b) => a+b)

console.log(input);
console.log(total);

//immutable with characters
const name = ["k","a","v","i","n"];

const fullname = name.reduce( (first, next) => first + next)

console.log(name);
console.log(fullname)