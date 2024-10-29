const crypto = require('crypto');

function main() {
    // const key = crypto.randomBytes(32);
    const key = "3a5c3fb822cb343208708f1ef18db3050c2983b248ddc3f2e5c14d576bb300d6";
    const iv = crypto.randomBytes(16);

    console.log({
        key: Buffer.from(key).toString("hex")
    }, {
        iv: Buffer.from(iv).toString("hex")
    });


    const user = {
        email: "be1newinner@gmail.com",
        user: "be1newinner",
        fullname: "Vijay Kumar",
        password: "hellovijay"
    }

    "3a5c3fb822cb343208708f1ef18db3050c2983b248ddc3f2e5c14d576bb300d6|81b81e75d0695426b0e8c8d5432e728d"

    // Encryption
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(JSON.stringify(user), 'utf8', 'hex');
    encrypted += cipher.final('hex');
    console.log("Encrypted Text:", encrypted);

    // Decryption
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    console.log("Decrypted Text:", decrypted);
}

module.exports = main