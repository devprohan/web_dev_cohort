// Proxy : A Proxy is like a middleman between your code and an object.
// Proxy is an object that wraps another object (called the target) and allows you to intercept and customize operations performed on the target, such as property access, assignment, enumeration, function invocation, etc..
// target: The original object you want to wrap.
// handler/Property : An object with traps (methods) that define custom behavior for operations on the proxy.

const user = {
  name: "Rohan",
  age: 19,
  password: 123,
};

const proxyUser = new Proxy(user, {
  get(target, prop) {
    if (prop === "password") {
      throw new Error("Access Denied");
    }
    return target[prop];
  },
  set(target, prop, value) {
    if (prop === "password") {
      throw new Error("Cannot Modified Password");
    }
    return target[prop];
  },
});

// console.log(proxyUser.password);

arr = [1, 2, 3, 4, 5];

function negativeIndex(arr) {
  return new Proxy(arr, {
    get(target, prop) {
      const index = Number(prop);
      if (index < 0) {
        return target[target.length + index];
      }
      return target[index];
    },

    set(target, prop, value) {
      const index = Number(prop);
      if (prop < 0) {
        target[target.length + index] = value;
      } else {
        target[index] = value;
      }
      return true;
    },
  });
}

const negArr = negativeIndex(arr);
console.log(negArr[-2]);
console.log(negArr[-3]);
console.log(negArr[-4]);
negArr[-1] = 22;
console.log(negArr);
console.log(arr); // Also Change In the Original Array..



// It works like :- target.length + index
// 5 + (-2) = -3 so o/p is 4
