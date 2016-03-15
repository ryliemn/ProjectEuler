function calculate() {
  let smallestFound = false;
  let currentNumber = 0;
  let currentDivisor = 1;

  let smallestMultiple = 0;

  while (!smallestFound) {
    currentNumber += 58140;
    let isDivisible = true;
    let currentDivisor = 0;
    while (isDivisible && currentDivisor <= 20) {
      currentDivisor++;
      isDivisible = currentNumber % currentDivisor === 0;
    }
    smallestFound = isDivisible;
    if (smallestFound) {
      smallestMultiple = currentNumber;
    }
  }

  return smallestMultiple;
}

exports.calculate = calculate;
