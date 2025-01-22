
// const car = {
//     key: value,
//     key2: value
// };

// CRUD Operations of objects

const car2 = {
    color: "red",
    model: "Toyota",
    year: 2020,
    isNew: true
}

// console.log(car2)

// Read
// 1. dot notation
// console.log(car2.year)

// 2. sqaure bracket
// console.log(car2["year"])

// 3. square bracket as variable
const ke = "year";
// console.log(car2[ke])

// Update Operations

console.log(car2)
// 1. dot notation

car2.year = 2021;
car2["year"] = 2021;
car2[ke] = 2021;

// Adding new Keys

car2.size = 25;

delete car2.color;


console.log(car2)