// Date in ms
const date = Date.now();
// const date2 = new Date(1704585152874)
const date2 = new Date();
// console.log(date2.toString());
// console.log(date2.toDateString());
// console.log(date2.toTimeString());

date2.setFullYear(1969);
date2.setMonth(12);
date2.setDate(1);
date2.setHours(5);
date2.setMinutes(30);
date2.setSeconds(0);
date2.setMilliseconds(0);
console.log(date2.getDate());
console.log(date2.getDay());
console.log(date2.getTime());
console.log(date2.toString());
