// # FEC (Function Execution Context) :- Two phase memory phase and code phase
// # GEC (Global Execution Context) :- Memory Phase and code phase
// # Same Variable Same Scope me Define nahi kar sakte

// Lexical Scope : IN js Lexical scope is convection that determines how variables are Accesiable in the block of code
let fName = "Rohan"; //closure: global for saymyname and inner

function sayMyName() {
  let lName = "Fande"; // closure: parent for inner
  console.log(`My Name is: ${fName} ${lName}`);

  function inner() {
    console.log("My Name is:", fName, lName);
  }
  inner();
}

sayMyName();

function increment() {
  let count = 0;

  // Closure Function : Function binded by its lexical scope
  return function () {
    count++;
    return count;
  };
}
const x = increment();
const y = increment();
console.log(x());
console.log(x());
console.log(x());
console.log(y());
console.log(y());
console.log(x());

// Closure : In JS Closure is a function that has access to the variables of its outer function even after outer function has finished executing
// It be like marne se phle Information de gya

// DrawBack Of closure : Memory Leak, because its parent function refrence Does not Delete by garbage collector so Storage Of Memore increses cause to memory leak so we can use variable = Null after workdone..

function createInstance() {
  let store = {
    value: 100,
  };
  return function logger() {
    console.log(store);
  };
}

let logger = createInstance();
logger();
logger();
logger();
logger();
logger();

// After WorkDone logger = null so defend memory leak
logger = null; // This allows garbage collection of store if no other references exist
// logger() ab code fatega..
