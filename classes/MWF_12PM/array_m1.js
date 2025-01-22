const people = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 },
];

const arr = people.filter((item, index)=>{
    return item.age > 29
})

console.log(arr)