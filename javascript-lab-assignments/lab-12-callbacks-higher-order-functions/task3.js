
 // Name: Mayank Gupta
 // Roll No.: 2510303296
 // Assignment: 12, Task 3

function repeatAction(times, action) {
  for (let round = 1; round <= times; round++) {
    action(round);
  }
}

repeatAction(3, (round) => {
  console.log("Round " + round);
});
