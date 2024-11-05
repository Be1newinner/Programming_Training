const bcrypt = require('bcrypt');

function main() {
    const saltRounds = 10;
    const myPlaintextPassword = 'Vijay@123';


    // for hashing password
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
            console.log(hash)

            // for verify password
            bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
                // result == true
                console.log(result)
            });
        });
    });


}

module.exports = main