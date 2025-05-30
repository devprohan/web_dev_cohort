// Debounce function: Returns a new function that delays the execution of 'fn'
// until after 'delay' milliseconds have passed since the last time it was called
function ptaNahi(fn, delay) {
  let myId; // This will store the ID of the timeout

  // The function returned here is what gets called later
  return function (...args) {
    // Clear any previously scheduled execution
    clearTimeout(myId);

    // Schedule a new execution after the specified delay
    myId = setTimeout(() => {
      // Call the original function with the correct context and arguments
      fn.apply(this, args);
    }, delay);
  };
}

// Simple greet function that prints a message
function greet(name) {
  console.log(`Hello ${name}`);
}

// Create a debounced version of a function that calls greet("Hitesh")
const sachMeNahipata = ptaNahi(() => greet("Hitesh"), 3000);

// Call the debounced function twice in quick succession
sachMeNahipata();
sachMeNahipata();

// Explanation:
// Because sachMeNahipata is debounced with a 3-second delay,
// the first call schedules the function to run after 3 seconds,
// but the second call happens before the 3 seconds have passed,
// so it cancels the first and sets a new 3-second timer.
// As a result, "Hello Hitesh" will be logged only once,
// 3 seconds after the last call to sachMeNahipata().
