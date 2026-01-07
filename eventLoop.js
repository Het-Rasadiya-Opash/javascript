console.log("1. Start"); // Synchronous

setTimeout(() => {
  console.log("2. Timeout (Macrotask)"); // Scheduled in Macrotask Queue
}, 0);

Promise.resolve().then(() => {
  console.log("3. Promise (Microtask)"); // Scheduled in Microtask Queue
});

console.log("4. End"); // Synchronous


async function myAsyncFunction() {
  console.log("2. Inside Async (Before Await)"); // Synchronous execution start
  
  await Promise.resolve(); // Pauses this function, returns control to the loop
  
  console.log("4. Inside Async (After Await)"); // Resumes as a Microtask
}

console.log("1. Script Start");
myAsyncFunction();
console.log("3. Script End");
