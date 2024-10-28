const selectionBuilder = require("./utils/SelectionBuilder");

async function main() {
    try {
        selectionBuilder(1, __dirname)
        waitForInput();
    } catch (error) {
        if (error.message.includes("force closed the prompt")) {
            console.log("Prompt Cancelled..")
        } else {
            console.error(error.message)
        }
    }
}

function waitForInput() {
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding("utf8");

    const input_listener = key => {
        if (key === '\u0003') {
            console.log('\nExiting...');
            process.exit();
        } else if (key.toLowerCase() === 'm') {
            process.stdout.write("\033c");
            console.log('\nRestarting...\n');
            clearListener();
            main();
        }
    }

    function clearListener() {
        process.stdin.removeListener("data", input_listener)
    }

    process.stdin.on("data", input_listener)
}

main();