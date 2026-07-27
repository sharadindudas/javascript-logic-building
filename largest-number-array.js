function findLargestNumber(input) {
  if (!Array.isArray(input)) {
    throw new Error("Please provide an array");
  }

  if (input.length === 0) return null;

  let largestNumber = input[0];
  for (let i = 1; i < input.length; i++) {
    if (input[i] > largestNumber) {
      largestNumber = input[i];
    }
  }

  return largestNumber;
}

console.log(findLargestNumber([3, 1, 2])); // 3
console.log(findLargestNumber([-5, 2, -3, 4])); // 4
console.log(findLargestNumber([0, 2, 3])); // 3
console.log(findLargestNumber([])); // null
