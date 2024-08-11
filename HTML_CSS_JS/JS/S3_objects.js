const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isRun: true,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
};

// const person_firstname = "Vijay";
// const person_lastname = "Kumar";
// const person_age = 30;

// const person_firstname1 = "Vijay";
// const person_lastname1 = "Kumar";
// const person_age1 = 30;

// const person_firstname2 = "Vijay";
// const person_lastname2 = "Kumar";
// const person_age2 = 30;

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isRun: true,
};

// CRUD Operations in Objects
// C => Create
// R => Read
// U => Update
// D => Delete

// Read Operation

// 1. dot notation
// console.log("First Name => ", 5, "fdsfas");
// console.log(person1.age);
// console.log(person1.lastName);
//
// 2. square bracket
// console.log("First Name => ", person1["firstName"]);
// console.log(person1["age"]);
// console.log(person1["lastName"]);
//
// 3.
// const key = "age";
// console.log(person1[key]);

// Update Operation

console.log(person);
person.address.street = "H550 / 9";

// delete person.age;

console.log(person);
