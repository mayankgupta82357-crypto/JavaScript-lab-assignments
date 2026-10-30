
 // Name: Mayank Gupta
 // Roll No.: 2510303296
 // Assignment: 13, Task 1

const prices = [120, 45, 300];

const total = prices.reduce((sum, price) => {
  return sum + price;
}, 0);

console.log(total);
