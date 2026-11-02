
 // Name: Mayank Gupta
 // Roll No.: 2510303296
 // Assignment: 14, Task 2

const timerId = setTimeout(() => {
  console.log("Not shown");
}, 1000);

clearTimeout(timerId);

console.log("Cancelled");
