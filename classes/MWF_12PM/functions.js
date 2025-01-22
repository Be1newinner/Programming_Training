
// Type 1
function samaanLana1(name) {
    const str = name + " Kumar";

    return str;
}

const fullname = samaanLana1("Vijay");
// const fullname = "Vijay Kumar";

console.log(fullname);

// Type 3

function samaanLana3() {
    console.log("hello");
    console.log("Hi2");
    console.log("how");
    console.log("are");
    console.log("you");
}

// Type 4

// function samaanLana4(name, age, ) {
//     console.log("hello" + name + " => " + age);
// }

function samaanLana4_(arg) {
    console.log("hello" + arg.name + " => " + arg.age);
}

// samaanLana4_({ name: "Vijay", age: 25 });
// samaanLana4_({ name: "Ajay", age: 29 });


// Pure Functions
// DRY => DON't REPeat Yourself

// for (let i = 0; i < 20; i++) {
//     samaanLana();
// }