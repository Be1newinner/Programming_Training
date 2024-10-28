const crypto = require('crypto');

function main() {
    // Use the same key and iv as in the encryption code
    const key = crypto.randomBytes(32); // AES-256 requires 256-bit key
    const iv = crypto.randomBytes(16); // Initialization vector

    // Encryption
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update('Hello, World!', 'utf8', 'hex');
    encrypted += cipher.final('hex');
    console.log("Encrypted Text:", encrypted);

    // Decryption
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    console.log("Decrypted Text:", decrypted);
}

module.exports = main