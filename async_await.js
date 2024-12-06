// Async/Await Basics

// Async Function Declaration
async function myAsyncFunction() {
  // Function body
}

// Async Arrow Function
const myAsyncArrowFunction = async () => {
  // Function body
};

// Async Method in Class
class MyClass {
  async myMethod() {
    // Method body
  }
}

// Using Await
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

// Error Handling with Try/Catch
async function fetchDataWithErrorHandling() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw or handle as needed
  }
}

// Async/Await with Promises
async function chainedAsyncOperations() {
  const result1 = await someAsyncOperation();
  const result2 = await anotherAsyncOperation(result1);
  return result2;
}

// Parallel Async Operations
async function parallelAsyncOperations() {
  const [result1, result2] = await Promise.all([
    someAsyncOperation(),
    anotherAsyncOperation()
  ]);
  return { result1, result2 };
}

// Async Iteration
async function processItems(items) {
  for await (const item of items) {
    await processItem(item);
  }
}

// Async with setTimeout (creating a delay)
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedOperation() {
  console.log('Starting');
  await delay(2000); // Wait for 2 seconds
  console.log('After 2 seconds');
}

// Async IIFE (Immediately Invoked Function Expression)
(async () => {
  // Async code here
})();

// Async with Array methods
async function processArray(array) {
  const results = await Promise.all(array.map(async (item) => {
    return await processItem(item);
  }));
  return results;
}

// Handling rejected promises
async function handleRejection() {
  try {
    await Promise.reject(new Error('Oops!'));
  } catch (error) {
    console.error('Caught rejection:', error);
  }
}

// Async function returning a value
async function asyncReturn() {
  return 'Hello, Async!';
}
// Usage:
asyncReturn().then(console.log); // Outputs: Hello, Async!

// Combining async functions
async function combinedAsyncFunctions() {
  const result1 = await asyncFunction1();
  const result2 = await asyncFunction2(result1);
  return await asyncFunction3(result2);
}

// Async with fetch and abort controller
async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(id);
    return await response.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timed out');
    }
    throw error;
  }
}

// Async generator function
async function* asyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

// Using async generator
async function useAsyncGenerator() {
  for await (const value of asyncGenerator()) {
    console.log(value);
  }
}

// Async with event listeners
function waitForEvent(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, resolve, { once: true });
  });
}

async function handleButtonClick() {
  const button = document.querySelector('#myButton');
  await waitForEvent(button, 'click');
  console.log('Button was clicked!');
}

// Best Practices:
// 1. Always handle errors with try/catch or .catch() on the returned promise
// 2. Avoid mixing callbacks and async/await
// 3. Use Promise.all() for concurrent asynchronous operations
// 4. Remember that async functions always return a promise
// 5. Be cautious with loops and async operations to avoid performance issues
// 6. Consider using libraries like axios for more advanced HTTP requests
