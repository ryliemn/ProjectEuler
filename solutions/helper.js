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
  const primes = getPrimeNumbers(1000000);
  const isPrimeClosure = function(x) {
    return primes.includes(x);
  }
  return isPrimeClosure;
}


exports.helper = {
  getPrimeNumbers: getPrimeNumbers,
  isPrime: isPrime()
};
