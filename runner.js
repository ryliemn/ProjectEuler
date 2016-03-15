const solvers = [
  require('./solutions/0001_multiples_of_3_and_5.js').calculate,
  require('./solutions/0002_even_fibonacci_numbers.js').calculate,
  require('./solutions/0003_largest_prime_factor.js').calculate,
  require('./solutions/0004_largest_palindrome_product.js').calculate,
  require('./solutions/0005_smallest_multiple.js').calculate
]

const solver = solvers[process.argv[2] - 1];
const timer = require('./utilities/timer.js').timer;

const solution = solver();
console.log(`Solution found was ${solution}`);

const msTaken = timer(solver);
console.log(`Average time taken was ${msTaken}ms`);
