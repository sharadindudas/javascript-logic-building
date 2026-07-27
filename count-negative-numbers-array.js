function countNegativeNumbers(input) {
  if (!Array.isArray(input)) {
    throw new Error("Please provide an array");
  }

  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] < 0) {
      count++;
    }
  }

  return count;
}
console.log(countNegativeNumbers([1, 32, 53, 11, -6]));
console.log(countNegativeNumbers([1, 32, -3, 11, -6, -23]));
console.log(countNegativeNumbers([]));
