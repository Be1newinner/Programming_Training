const people = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 },
];


// function filter(item) {
//     return item.age <= 30
// }
const fun = (e) => {
    return e.age <= 30
};
// const fun = (item) => item.age <= 30;

// function fun(_, index) {
//     return index < 2
// }

// const filtered = people.filter(fun)
const filtered = people.filter(fun)

// console.log(filtered)

const newItem = people.find((e) => e.age <= 30)
// const newItem = people.findIndex((e) => e.age <= 30)
// const newItem = people.some((e) => e.age <= 20)
// const newItem = people.every((e) => e.age <= 40)
// const newItem = people.map((e) => ({
//     name: e.name + " Kumar",
//     age: e.age
// }))

// people.forEach((e) => console.log(e.name))



console.log(newItem)

