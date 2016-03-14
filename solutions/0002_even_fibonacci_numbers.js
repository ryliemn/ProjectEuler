function calculate() {
  let minusTwo = 1;
  let minusOne = 1;
  let currentFibo = minusOne + minusTwo;

  let sum = 0;

  while (currentFibo < 4000000) {
    if (currentFibo % 2 == 0) {
      sum += currentFibo;
    }
    minusTwo = minusOne;
    minusOne = currentFibo;
    currentFibo = minusTwo + minusOne;
  }

  return sum;
}

exports.calculate = calculate;
