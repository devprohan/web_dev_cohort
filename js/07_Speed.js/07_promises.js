Promise.resolve().then(function p1() {
  // console.log("Promise resolved ho gya");
});

// Starvation :- Callback Queue wont get opportunity to execute tasks this situation is called starvation
// promises) micro task queue = has greater priority than task queue or callback queue

// There are two types of Queue :- micro-tasks queue and callback task queue
// promises ,event handlers work on (mtq) and timeouts work on (ctq)

console.log("hello jii");

setTimeout(function timerfunction() {
  console.log("Run after zero second but starvation ke andar fas gya bhai");
}, 0);

Promise.resolve().then(function p2() {
  console.log("p2 resolved");

  Promise.resolve().then(function p3() {
    console.log("p3 resolved");

    Promise.resolve().then(function p4() {
      console.log("p4 resolved");

      Promise.resolve().then(function p5() {
        console.log("p5 resolved");
      });
    });
  });
});

console.log("Bye Bye");
