var jwt = require('jsonwebtoken');

function main() {
    var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    console.log(token);

    var decoded = jwt.verify(token, 'shhhhh');
    console.log(decoded.foo) // bar

    var privateKey = fs.readFileSync('private.key');
    var token2 = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' });

    var cert = fs.readFileSync('public.pem');  // get public key
    jwt.verify(token2, cert, function (err, decoded) {
        console.log(decoded.foo) // bar
    });

}

module.exports = main