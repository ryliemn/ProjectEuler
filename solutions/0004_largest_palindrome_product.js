function calculate() {
  const isNumberPalindrome = function(x) {
    let str = x.toString();
    let left = 0;
    let right = str.length - 1;
    let isPalindrome = true;

    while (left < right && isPalindrome) {
      isPalindrome = str[left] === str[right];
      left++;
      right--;
    }

    return isPalindrome;
  }

  let highestPalindrome = 0;

  for (let i = 100; i < 1000; i++) {
    for (let j = i; j < 1000; j++) {
      let product = i * j;
      if (product > highestPalindrome && isNumberPalindrome(product)) {
        highestPalindrome = product;
      }
    }
  }

  return highestPalindrome;
}

exports.calculate = calculate;
