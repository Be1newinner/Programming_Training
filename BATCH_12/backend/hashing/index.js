const argon2 = require('argon2');


async function Hashing(password) {
    try {
        const hash = await argon2.hash(password);
        console.log("HASHING => ", hash);
    } catch (err) {
        console.log(err)
    }
}

async function Verify(hashed, password) {
    try {
        if (await argon2.verify(hashed, password)) {
            console.log("Password Matched")
        } else {
            console.log("Password invalid")
        }
    } catch (err) {
        console.log(err)
    }
}

Hashing("Vijay123")
Verify(hash2, "Vijay123")