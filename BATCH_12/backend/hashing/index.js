const argon2 = require('argon2');

// We are using Argon2
// Argon 2 documentations: -
// https://www.npmjs.com/package/argon2
// https://github.com/ranisalt/node-argon2/wiki/Options
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