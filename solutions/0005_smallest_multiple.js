const helper = require('./helper.js').helper;

function calculate() {
  let primeFactors = {};
  for (let i = 2; i <= 20; i++) {
    primeFactors[i] = helper.getPrimeFactors(i);
  }

  let commonFactors = [];
  for (let factors in primeFactors) {
    let commonFactorCopy = commonFactors.slice();
    factors = primeFactors[factors];

    for (let i = 0; i < factors.length; i++) {
      let factor = factors[i];
      if (commonFactorCopy.includes(factor)) {
        factors.splice(i, 1);
        i--;
        let indexInCopy = commonFactorCopy.indexOf(factor);
        commonFactorCopy.splice(indexInCopy, 1);
      }
    }

    commonFactors = commonFactors.concat(factors);
  }

  let product = 1;
  for (let factor in commonFactors) {
    factor = commonFactors[factor];
    product *= factor;
  }

  return product;
}

exports.calculate = calculate;
