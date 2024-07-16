const { parentPort, isMainThread } = require("worker_threads");

// Function to calculate prime numbers up to a given limit
function calculatePrimes(limit) {
  const primes = [];
  for (let num = 2; num <= limit; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(num);
    }
  }
  return primes;
}

const times = [];

// Check if running as a worker thread
if (isMainThread) {
  console.error("This script should be run as a worker thread.");
  process.exit(1);
} else {
  // Handle messages from the parent thread
  parentPort.on("message", (message) => {
    if (message === "Start processing") {
      console.log("Starting heavy computation");

      // Perform the heavy computation
      const limit = 10000000; // Adjust as needed
      const startmessage = Date.now();
      const primes = calculatePrimes(limit);
      const endmessage = Date.now();

      times.push({
        start: startmessage,
        end: endmessage,
        diff: endmessage - startmessage,
      });
      // Send the result back to the parent thread
      parentPort.postMessage(
        `Calculated ${primes.length} primes. ${JSON.stringify(times)} `
      );
      console.log("Computation finished");
    }
  });
}
