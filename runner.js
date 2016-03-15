const solvers = [
  require('./solutions/0001_multiples_of_3_and_5.js').calculate,
  require('./solutions/0002_even_fibonacci_numbers.js').calculate,
  require('./solutions/0003_largest_prime_factor.js').calculate,
  require('./solutions/0004_largest_palindrome_product.js').calculate
]

const solver = solvers[process.argv[2] - 1];
const timer = require('./utilities/timer.js').timer;

const msTaken = timer(solver);
const solution = solver();

console.log(`Solution found was ${solution}`);
console.log(`Average time taken was ${msTaken}ms`);
