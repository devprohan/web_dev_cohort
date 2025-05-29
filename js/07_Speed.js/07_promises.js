Promise.resolve().then(function p1() {
  // console.log("Promise resolved ho gya");
});

// Starvation :- Callback Queue wont get opportunity to execute tasks this situation is called starvation
// promises) micro task queue = has greater priority than task queue or callback queue

// There are two types of Queue :- micro-tasks queue and callback task queue
// promises ,event handlers work on (mtq) and timeouts work on (ctq)

// console.log("hello jii");

setTimeout(function timerfunction() {
  // console.log("Run after zero second but starvation ke andar fas gya bhai");
}, 0);

Promise.resolve().then(function p2() {
  // console.log("p2 resolved");

  Promise.resolve().then(function p3() {
    // console.log("p3 resolved");

    Promise.resolve().then(function p4() {
      // console.log("p4 resolved");

      Promise.resolve().then(function p5() {
        // console.log("p5 resolved");
      });
    });
  });
});

// console.log("Bye Bye");

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Promise = In Js promise is an object that represents the eventual/ekdam se result of asynchronous operation
// Promise be like: Abhi promise lele value nhi he ; jab milegi tab de dunga
// Sync operation :- On the spot hoga vo , it also called block code because it runs line by line e.g :- cbse result, govt website easliy block because run on sync
// Async operation :- Jo thoda time lega vo , it also called unblock code because it runs async, e.g:- google 
// JSON :- convert response from json data into object IMP: It also a Async so it have take .then()

// Three States of Promises :
// 1. Pending :- When Promise is Created and opern hasn't start
// 2. Fullfilled :- The opren is succefull and value is produced
// 3. Rejected :- when an error occurs during operation

fetch("https://catfact.ninja/fact")
  .then((response) => {
    response.json().then((obj) => console.log(obj));
  }) // It returns response

  .catch((error) => {}) // It returns Eroor
  .finally(() => {
    console.log("");
  }); // run always
