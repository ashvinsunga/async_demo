const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async operation 1...");
    resolve(1);
    // reject(new Error("Error!"));
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async operation 2...");
    resolve(2);
    // reject(new Error("Error!"));
  }, 2000);
});

// If p1 and p2 promises both returned resolved, this will be
// considered fullfilled and displays values in an array, else display error
// Promise.all([p1, p2])
//   .then((result) => console.log(result))
//   .catch((err) => console.log("Error", err.message));

// Do something as soon as one operation is completed and not wait for them to complete to do something
Promise.race([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log("Error", err.message));
