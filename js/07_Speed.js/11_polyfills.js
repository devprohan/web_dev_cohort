//Polyfills :- A polyfill in js is a piece of code that allows older browser to use modern javascript

// create polyfill hululu
Array.prototype.hululu = () => console.log("I am Inside The Hululu");

const nums = [11, 12, 13, 14];
nums.hululu();

// Create Polyfill of ForEach
// Foreach Signature :- it gives callback function (current items and index) And print All items in Array And Index..

// Myforeach name ka proto is not avaliable
if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (cb) {
    // here we get callback to call all items and index of current array
    for (i = 0; i < this.length; i++) {
      // here this is used for denote current array length
      cb(this[i], i); // this[i] for curr-item and i for index
    }
  };
}

const arr = [1, 2, 3, 4, 5];
arr.myForEach((value, index) => {
  console.log(`At Index: ${index} value: ${value}`);
});

// Create Polyfill of Map :-
// Map signature : It gives callBack function and print all elements and index and also return a new Array..

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (cb) {
    const result = [];
    for (i = 0; i < this.length; i++) {
      const value = cb(this[i], i);
      result.push(value);
    }
    return result;
  };
}

const trippleMyArray = arr.myMap((e) => e * 3);
console.log(trippleMyArray);

// Create polyfill of Filter :-

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (cb) {
    const result = [];
    for (i = 0; i < this.length; i++) {
      if (cb(this[i])) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

const greaterThanTwo = arr.myFilter((e) => e > 2);
console.log(greaterThanTwo);

// Create Polyfill for reduce :-

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (cb, initialValue = undefined)
   {
    if (!initialValue) {
      let acc = this[0];

      for (i = 1; i < this.length; i++) {
        acc = cb(acc, this[i]);
      }

      return acc;
    } else {
      let acc = initialValue;

      for (i = 0; i < this.length; i++) {
        acc = cb(acc, this[i]);
      }

      return acc;
    }
  };
}

const myRes = arr.myReduce(
  (abTakKiValue, currValue) => abTakKiValue + currValue,
  12
);
console.log(myRes);
