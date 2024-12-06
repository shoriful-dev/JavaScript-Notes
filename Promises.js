// Promise Basics

// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation here
  if (/* operation successful */) {
    resolve(value); // Fulfills the promise
  } else {
    reject(error); // Rejects the promise
  }
});

// Promise States
// 1. Pending: Initial state, neither fulfilled nor rejected
// 2. Fulfilled: The operation completed successfully
// 3. Rejected: The operation failed

// Using Promises

// .then() method
myPromise.then(
  (result) => { /* handle fulfillment */ },
  (error) => { /* handle rejection */ }
);

// .catch() method for error handling
myPromise
  .then((result) => { /* handle fulfillment */ })
  .catch((error) => { /* handle rejection */ });

// .finally() method
myPromise
  .then((result) => { /* handle fulfillment */ })
  .catch((error) => { /* handle rejection */ })
  .finally(() => { /* executes regardless of success or failure */ });

// Chaining Promises
firstPromise()
  .then((result1) => secondPromise(result1))
  .then((result2) => thirdPromise(result2))
  .then((finalResult) => { /* handle final result */ })
  .catch((error) => { /* handle any error in the chain */ });

// Promise.all()
// Waits for all promises to resolve, or for any to reject
Promise.all([promise1, promise2, promise3])
  .then((results) => { /* handle results array */ })
  .catch((error) => { /* handle any rejection */ });

// Promise.race()
// Settles as soon as any of the promises settles (fulfills or rejects)
Promise.race([promise1, promise2, promise3])
  .then((result) => { /* handle first settled result */ })
  .catch((error) => { /* handle first rejection */ });

// Promise.allSettled()
// Waits for all promises to settle, regardless of whether they fulfill or reject
Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    // results is an array of objects, each with status and value/reason
  });

// Promise.any()
// Fulfills when any of the promises fulfills, rejects if all promises reject
Promise.any([promise1, promise2, promise3])
  .then((result) => { /* handle first fulfillment */ })
  .catch((errors) => { /* handle if all promises rejected */ });

// Promisification (Converting callbacks to Promises)
function promisify(callbackBasedFunction) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      callbackBasedFunction(...args, (error, result) => {
        if (error) reject(error);
        else resolve(result);
      });
    });
  };
}

// Async functions and Promises
async function asyncFunction() {
  try {
    const result = await myPromise;
    return result;
  } catch (error) {
    console.error(error);
  }
}

// Creating a delay with Promises
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Usage:
delay(2000).then(() => console.log('After 2 seconds'));

// Parallel Promise execution
async function parallelExecution() {
  const [result1, result2] = await Promise.all([
    asyncOperation1(),
    asyncOperation2()
  ]);
  return { result1, result2 };
}

// Sequential Promise execution
async function sequentialExecution() {
  const result1 = await asyncOperation1();
  const result2 = await asyncOperation2(result1);
  return result2;
}

// Error handling patterns
async function errorHandlingPatterns() {
  try {
    const result = await riskyOperation();
    return result;
  } catch (error) {
    if (error instanceof SpecificError) {
      // Handle specific error type
    } else {
      // Handle general errors
    }
    throw error; // Re-throw if needed
  }
}

// Promise cancellation (using AbortController)
const controller = new AbortController();
const { signal } = controller;

fetch('https://api.example.com/data', { signal })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => {
    if (err.name === 'AbortError') {
      console.log('Fetch aborted');
    } else {
      console.error('Fetch error:', err);
    }
  });

// Cancel the fetch
controller.abort();

// Best Practices:
// 1. Always handle rejections (use .catch() or try/catch with async/await)
// 2. Avoid nesting Promises; use chaining instead
// 3. Use async/await for more readable asynchronous code
// 4. Be aware of the microtask queue and how Promises affect execution order
// 5. Use Promise.all() for concurrent operations when order doesn't matter
// 6. Consider using libraries like Bluebird for extended Promise functionality
