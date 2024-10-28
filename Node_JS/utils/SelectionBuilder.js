const { select } = require("@inquirer/prompts");
const path = require("path")
const fs = require("fs")

module.exports = async function main(type = 0, dirLocation) {
    let directory = type === 1 ? path.join(dirLocation, "./" + "packages") : dirLocation

    const data = fs.readdirSync(directory);

    const choices = data.filter(item => !["index.js"].includes(item)).map((item) => ({
        name: item,
        value: item
    })
    )
    const answer = await select({
        message: 'Select project',
        choices: choices,
    });

    const modulePath = path.join(directory, answer);
    const cb = require(modulePath);
    cb();
}
