function main() {
    const text = 'Vijay Kumar';
    const buffer = Buffer.from(text, 'utf8');
    console.log("Buffer: ", buffer);


    // Base64 Encoding
    const base64 = buffer.toString('base64');
    console.log('Base64:', base64);

    // Base64 Decoding
    const decodedText = Buffer.from(base64, 'base64');
    const base64Decoded = base64.toString('utf8');
    console.log('Base64 Decoded:', base64Decoded);

    // Hexadecimal Encoding
    const hex = buffer.toString('hex');
    console.log('Hexadecimal:', hex);
}

module.exports = main