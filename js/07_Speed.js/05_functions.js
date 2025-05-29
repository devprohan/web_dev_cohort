function greet(name) {
  console.log(`Hello ${name}`);
}

greet("Hitesh");
greet("Piyush");

// Global function and blocked scope function
let globalVar = "I am global";

function modifyGlobal() {
  globalVar = "I am modified";
  let blockScopedVar = "I am blocked-scoped";
  console.log(blockScopedVar);
}
// console.log(blockScopedVar); :- this can not be run because it is blocked scope ..


modifyGlobal();

let config = (function () {
  let settings = {
    theme: "dark",
  };
  return settings;
})();

// Call :- It can be used for the change the context of given function ..

let person1 = {
  personsName: "ravi",
  greet: function () {
    console.log(`Hello, ${this.personsName}`);
  },
};

let person2 = {
  personsName: "hitesh",
};

person1.greet.call(person2); // call change context of the person 1 to person 2 name


// Bind() :- Returns a new function with a specified this value, which can be called later.
function greet() {
    console.log(`hello ${this.name}`);
}

const person = {
    name : 'Rohan'
}
const greetRohan = greet.bind(person)
greetRohan()