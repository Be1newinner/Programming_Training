const crypto = require('crypto');

const key = crypto.randomBytes(32); // 256-bit key for AES-256
const iv = crypto.randomBytes(16); // Initialization vector
const text = 'Hello, World!';

// Encrypt using AES-256-GCM
function encryptGCM(text, key, iv) {
    const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    const tag = cipher.getAuthTag(); // Get the authentication tag
    return iv.toString('hex') + ':' + tag.toString('hex') + ':' + encrypted; // Include IV and tag for decryption
}

// Decrypt using AES-256-GCM
function decryptGCM(encryptedText, key) {
    const textParts = encryptedText.split(':');
    const iv = Buffer.from(textParts.shift(), 'hex');
    const tag = Buffer.from(textParts.shift(), 'hex');
    const encryptedTextBuffer = Buffer.from(textParts.join(':'), 'hex');

    const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
    decipher.setAuthTag(tag); // Set the authentication tag
    let decrypted = decipher.update(encryptedTextBuffer, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

const encryptedGCM = encryptGCM(text, key, iv);
console.log('Encrypted (GCM):', encryptedGCM);
const decryptedGCM = decryptGCM(encryptedGCM, key);
console.log('Decrypted (GCM):', decryptedGCM);
