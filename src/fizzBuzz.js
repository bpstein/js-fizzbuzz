function FizzBuzz() {
}

FizzBuzz.prototype.play = function(number) {
  if (number % 15 === 0) {
    return 'fizzbuzz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  return number;
}

FizzBuzz.prototype.isDivisibleBy = function(divisor, number) {
  return number % divisor === 0;
}