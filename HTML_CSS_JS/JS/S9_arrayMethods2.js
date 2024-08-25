const names = ["Vijay Kumar", "ajay", "sanjay", "ankit", "vishal"];
const ages = [5, 10, 15, 16, 19];
const isStudentArray = [true, false, true, false, true];
const objectarray = [
  { name: "Vijay", age: 5, isStudent: true },
  { name: "ajay", age: 10, isStudent: false },
  { name: "sanjay", age: 15, isStudent: true },
  { name: "Rahul", age: 16, isStudent: false },
  { name: "Raj", age: 19, isStudent: true },
];

// for (let i = 0; i < names.length; i++) {
//   names[i] = names[i] + " Kumar";
// }

// Map method -------------------------------------------------------
// Map method ki help se purane array me modification krke new array bana sakte hai... aur purana array me koi change nahi hoga

// const newArray = names.map(function(e,i){
//     return e + " Kumar"
// })

// const newArray = names.map((e,i) => {
//     return e + " Kumar"
// })

// const newArray = names.map((e, i) => e + " Kumar");

// const newArray = ages.map((e, i) => e + 1);
// const newArray = ages.map((e, i) => {
//   if (e < 18) {
//     return e + 1;
//   } else {
//     return e;
//   }
// });
// const newArray = ages.map((item, index) => {
//   if (index < 3) {
//     return item + 1;
//   } else {
//     return item;
//   }
// });

// const newArray = objectarray.map((e, i) => {
//   e.isStudent = true;
//   return e;
// });

// objectarray[2].age = 5;

// console.log(newArray);

// Loop Qustion -------------------------------------------------

// const name1 = "Vijay";
// const name2 = "Vijay";
// const name3 = "Vijay";
// const name4 = "Vijay";

// const name = [name1, name2, name3, name4];

// for (let i = 0; i < names.length; i++) {
//   // name[i] = name[i] + " kumar";
//   names[i] += " kumar";
// }

// const namearr = name.map((e, i) => e + " Kumar");

// console.log(namearr);

// forEach method -------------------------------------------------

// const namearr = names.map((e, i) => e + " Kumar");

// names.forEach((e, i) => {
//   names[i] += " Kumar";
// });

// thi is exactly same as for loop
// for (let i = 0; i < names.length; i++) {
//   // name[i] = name[i] + " kumar";
//   names[i] += " kumar";
// }

// console.log(names);

//  filter ----------------------------------------------------
// it is upgrade of map to filter some array

// const arr = names.filter((_, index) => index < 3);
// const arr = names.filter((elem, index) => index > 3);
// const arr = names.filter((elem, index) => index != 3);
// const arr = names.filter((elem, index) => elem.includes("jai"));
// const arr = names.filter((elem) => !elem.includes("jay"));

// console.log(arr);

// find ---------------------------------------------------------
// it is used to find the first element in the array that meets the condition

// const arr = names.find((elem) => !elem.includes("jay"));

// console.log(arr);

// findIndex ---------------------------------------------------

// const arr = names.findIndex((elem) => !elem.includes("jay"));

// console.log(arr);

// Some ---------------------------------------------------------

// const arr = names.some((elem) => !elem.includes("jay"));
// const arr = ages.find((elem) => elem > 18);
// console.log(arr);

// every ---------------------------------------------------------

// const arr = names.every((elem) => elem.includes("jay"));
// const arr = ages.every((elem) => elem > 1);
// console.log(arr);
