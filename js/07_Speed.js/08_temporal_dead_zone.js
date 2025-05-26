// TDZ:-# Temporal Dead Zone (TDZ) :- The term to describe the state where variables are un-reachable .The Re in scope ,but They aren't declared..
console.log("Age is", age);

// Dead Zone 
let age = 19;
// ReferenceError: age is not defined
// ReferenceError: Cannot access 'age' before initialization

// Key Points :- Let ki bhi Hoisting hoti hai but issue is TDZ