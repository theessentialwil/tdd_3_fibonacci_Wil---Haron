function fibonacci(n) {
  if (n < 0) {
    throw "Fibonacci is defined for non-negative numbers.";
  } else if (n <= 1) {
    return n;
  } 

  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

// Returns sequence to 10th position
// for (let i = 0; i < 10; i++) {
//   console.log(fibonacci(i));
// }
// console.log(fibonacci(-1));
module.exports = fibonacci;
