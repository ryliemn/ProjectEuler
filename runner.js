const solver = require('./solutions/0001_multiples_of_3_and_5.js').calculate;
const timer = require('./utilities/timer.js').timer;

const msTaken = timer(solver);
const solution = solver();

console.log(`Solution found was ${solution}`);
console.log(`Average time taken was ${msTaken}ms`);
