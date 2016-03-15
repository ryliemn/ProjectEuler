const helper = require('./helper.js').helper;

function calculate() {
  const primes = helper.getPrimeNumbers(10000);
  let x = 600851475143;
  let primeFactors = [];

  for (let i = 0; i < primes.length; i++) {
    let currentPrime = primes[i];
    while (x % currentPrime === 0) {
      x = x / currentPrime;
      primeFactors.push(currentPrime);
    }
    if (x === 1) break;
  }

  const largestPrimeFactor = primeFactors[primeFactors.length - 1];

  return largestPrimeFactor;
}

exports.calculate = calculate;
