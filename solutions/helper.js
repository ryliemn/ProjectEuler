function getPrimeNumbers(n) {
  let sieve = [];

  for (let i = 0; i < n; i++) {
    sieve.push(true);
  }

  sieve[0] = false;
  sieve[1] = false;

  for (let i = 2; i < n; i++) {
    if (sieve[i]) {
      for (let j = i + i; j < n; j += i) {
        sieve[j] = false;
      }
    }
  }

  let primes = [];

  for (let i = 0; i < n; i++) {
    if (sieve[i]) {
      primes.push(i);
    }
  }

  return primes;
}

function isPrime() {
  const primes = getPrimeNumbers(10000);
  const isPrimeClosure = function(x) {
    return primes.includes(x);
  }
  return isPrimeClosure;
}

function getPrimeFactors() {
  const primes = getPrimeNumbers(10000);
  const getPrimeFactorsClosure = function(x) {
    let primeFactors = [];

    for (let i = 0; i < primes.length; i++) {
      let currentPrime = primes[i];
      while (x % currentPrime === 0) {
        x = x / currentPrime;
        primeFactors.push(currentPrime);
      }
      if (x === 1) break;
    }

    return primeFactors;
  }
  return getPrimeFactorsClosure;
}


exports.helper = {
  getPrimeNumbers: getPrimeNumbers,
  isPrime: isPrime(),
  getPrimeFactors: getPrimeFactors()
};
