// A callback function is a function that is passed as an argument to another function, and then it is called (or "executed") inside that other function.

function sum(a, b, cb) {
  setTimeout(() => {
    cb(a + b);
  }, 3 * 1000);
}

sum(5, 6, (result) => {
  console.log("Result is :", result); // callback function
});

const { rejects } = require("assert");
// Without Promise how use js run Async Code by use callback function
const fs = require("fs");
const { resolve } = require("path");

console.log("Starting program");

// fs.readFile("./hello.txt", "utf-8", function (err, content) {
//   if (err) {
//     console.log("Error in file reading", err);
//     return; // ❗ Important: Stop here if file reading fails
//   }

//   console.log("File Reading Success", content);

//   fs.writeFile("backup.txt", content, (error) => {
//     if (error) {
//       console.log("Error in writing text", error);
//       return;
//     }

//     console.log("File written to backup.txt");

//     fs.unlink("./hello.txt", (e) => {
//       if (e) {
//         console.log("Error in deleting file", e);
//       } else {
//         console.log("File delete Success");
//       }
//     });
//   });
// });

// Above Condition is called as Callback Hell : ek ke andr multiple callbacks.
// CallBack Hell :- Callback Hell refers to the situation where multiple asynchronous operations are nested inside each other using callbacks, leading to deeply nested, hard-to-read, and error-prone code.

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Convert code into promise:
const fs = require("fs");

// Read File Promise
function readFileWithPromise(filepath, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, encoding, (err, content) => {
      if (err) reject(err);
      else resolve(content);
    });
  });
}

// Write File Promise
function writeFileWithPromise(filepath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filepath, data, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

// Unlink (Delete File) Promise
function unlinkWithPromise(filepath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filepath, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

// Use the promises
readFileWithPromise("./hello.txt", "utf-8")
  .then((content) => {
    console.log("File Read Successfully:", content);
    return writeFileWithPromise("./backup.txt", content);
  })
  .then(() => {
    console.log("Backup created successfully.");
    return unlinkWithPromise("./hello.txt");
  })
  .then(() => {
    console.log("Original file deleted.");
  })
  .catch((e) => {
    console.log("❌ Error he bhai file hi nh connect ki:", e.message);
  })
  .finally(() => {
    console.log("🙏 Jai Shree Ram");
  });



// result.then((e) => {
// });


// _______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________


// Async-Await :- It is an syntatic sugar that can be helps to run Async code to sync code..

async function doTasks() {
  try {
    const fileContent = await readFileWithPromise('./hello.txt', 'utf-8');
    console.log('All DOne');
    await writeFileWithPromise('./backup.txt', fileContent);
    await wait(10);
    await unlinkWithPromise('./hello.txt');
    throw new Error('');
  } catch (e) {
    console.log('Error', e);
  } finally {
    console.log('All DOne');
  }
}