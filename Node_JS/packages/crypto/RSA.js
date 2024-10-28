const { generateKeyPairSync, publicEncrypt, privateDecrypt } = require('crypto');

function main() {

  // Generate RSA key pair and output keys in PEM format
  const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'spki',    // Recommended for RSA public key
      format: 'pem',   // PEM format
    },
    privateKeyEncoding: {
      type: 'pkcs8',   // Recommended for RSA private key
      format: 'pem',   // PEM format
    },
  });

  console.log("Public Key:\n", publicKey);
  console.log("Private Key:\n", privateKey);

  const data = 'Sensitive data';

  // Encrypt the data using the public key
  const encryptedData = publicEncrypt(publicKey, Buffer.from(data));
  console.log("Encrypted Data:", encryptedData.toString('hex'));

  // Decrypt the data using the private key
  const decryptedData = privateDecrypt(privateKey, encryptedData);
  console.log("Decrypted Data:", decryptedData.toString());

}

module.exports = main