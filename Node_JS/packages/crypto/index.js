const { select } = require('@inquirer/prompts');
const fs = require("fs");
const path = require('path');
const selectionBuilder = require("../../utils/SelectionBuilder");

async function main() {
    try {
        const data = fs.readdirSync(__dirname);
        const choices = data.filter(item => item !== "index.js").map((item) => ({
            name: item,
            value: item
        }));

        const answer = await select({
            message: 'Select file',
            choices: choices,
        });

        const modulePath = path.join(__dirname, answer);
        const main = require(modulePath);
        main();

        await waitForInput();
    } catch (error) {
        if (error.message.includes("force closed the prompt")) {
            console.log("Prompt Cancelled..");
        } else {
            console.error(error.message);
        }
    }
}

async function waitForInput() {
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding("utf8");

    process.stdin.on("data", (key) => {
        if (key === '\u0003') {
            console.log('\nExiting...');
            process.exit();
        } else if (key.toLowerCase() === 'r') {
            console.log('\nRestarting...\n');
            promptFileSelection();
        }
    });
}

module.exports = main