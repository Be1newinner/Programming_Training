function waitForInput(type=0, callback) {
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding("utf8");

    const input_listener = (key) => {
        if (key === '\u0003') {
            console.log('\nExiting...');
            process.exit();
        } else if (key.toLowerCase() === type == 1 ? "m" : "r") {
            process.stdout.write("\033c");
            console.log('\nRestarting...\n');
            clearListener();
            callback();
        }
    };

    process.stdin.on("data", input_listener)

    function clearListener() {
        process.stdin.removeListener("data", input_listener)
    }
}

module.exports = waitForInput
