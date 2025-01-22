// const regEx = /^vijay/ig;
const regEx = /^[6-9]+\D{2,}$/g;
// const names = "Vijaay Kumary";
const names = "6abc";
const result = regEx.test(names);
const resultMatch = names.match(regEx);

console.log(result);
console.log(resultMatch);
