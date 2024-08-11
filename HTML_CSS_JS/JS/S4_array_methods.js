// Array Methods
// * length
// * destructuring of array
// * push()
// * pop()
// * shift()
// * unshift()
// * splice()
// * sort()
// * reverse()
// * concat()
// * join()
// * slice()
// * indexOf()
// * lastIndexOf()
// * includes()
// * every()
// * some()
// * find()
// * findIndex()
// * forEach()
// * map()
// * filter()
// * reduce()
// * reduceRight()
// * flat()
// * flatMap()
// * at()

const names = ["Vijay", "Rahul", "Rohan", "Rahul"];
const names2 = ["Rahul", "Ajay"];
const names3 = ["Rahul1", "Ajay2"];

//  length Method ----------------------------------------------------------------

// console.log(names.length);

// Output: 4

// destructuring of array --------------------------------------------------------
// const first = names[0];
// const second = names[1];
// const third = names[2];
// const fourth = names[3];

// const [first, second, third, fourth] = names;

// const [first, second, third] = names;

// const [first] = names;
// const [first, ...dasdasdasdadsadasdasdaadasdas] = names;
// const etc = names;

// console.log(dasdasdasdadsadasdasdaadasdas);

// Array Concatenation ------------------------------------------------------------
// const namesFull = names.concat(names2)
// const namesFull = names.concat(names2, names3);

// console.log(namesFull, namesFull.length);

// Array creation - from and fill method ---------------------------------------------
// const arr1 = Array.from({
//   length: 20,
// });

// arr1.fill("Vijay");

// const arr2 = Array.from("DHASIDHUSAD");
// const arr2 = Array.from("5446465465465465465");
// const arr2 = Array.from(5446465465465465465);

// console.log(arr2);

// typeof vs Array.isArray() -------------------------------------------------------

// const name1 = "Vijay";
// const age = 5;
// const bool = true;
// const arr = [1, 2, 3];
// const obj = { name: "Vijay", age: 5 };

// console.log(typeof obj);
// console.log(Array.isArray(arr));

// if (typeof name1 === "string") {
//   console.log("IS STRING");
// } else {
//   console.log("NOT STRING");
// }

// includes and indexof - searching k liye

// console.log(names.includes("Vijay"));
// console.log(names.indexOf("Rohanadsdasd"));
// console.log(names.indexOf("Rahul")); // left to right searching
// console.log(names.lastIndexOf("Rahul")); //  right to left searching

//  SORTING OF ARRAY ------------------------------------------------------

// const name1 = [...names]; // CALL BY VALUE

// name1.sort();

// name1.reverse();
// // console.log(names);
// console.log(name1);

// const name1 = names; // CALL BY REFERENCE
// name1.sort();
// console.log(names);
