function main() {
    const hexString = '3082010A0282010100A81FAE109B9B28B30497573C583AA2D8D9A7FB2D04DCBD880338BCE29E6C78DE20E2524E5EB65F10BE463CA63E25EADE798376AA6328B82733EB1B7808595EEA2EB0DECD12E5A1B3DD0721CF6137FF46A7327A278E145580BE74DB6471C3E130FE5DBA96FDB703C18524A5E6EABB5AC74B2D2A778E0942E4A72B3DCB4C4CC3BF841FA1A9B87969E341F3C2EA7FA5883E11EC2190D0B71C1CFF7CA6C4D0A21ACBB3E27F8A20675AFCFA4BBD337BE3B720CA79017E2CA007A1D0FDF587336ECDD0B80E1385BC75A5D853A023EFFA64A8D06E3D8613D5EE251E55B9F7A0F910D86ACADE0E5744D34FCA7C0B6B37D17CB4B405237D25535CDA47D2136234DAE033B30203010001';
    const binaryData = Buffer.from(hexString, 'hex');
    console.log(binaryData);
    const base64Key = binaryData.toString('base64');
    console.log(base64Key);
    const pemKey = `-----BEGIN PUBLIC KEY-----\n${base64Key.match(/.{1,64}/g).join('\n')}\n-----END PUBLIC KEY-----`;
    console.log(pemKey);
}

module.exports = main

MIIBCgKCAQEAqB+uEJubKLMEl1c8WDqi2Nmn+y0E3L2IAzi84p5seN4g4lJOXrZf