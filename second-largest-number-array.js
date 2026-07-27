function findSecondLargestNumber(input) {
  if (!Array.isArray(input)) {
    throw new Error("Please provide an array");
  }

  if (input.length < 2) return null;

  let largestNumber = -Infinity,
    secondLargestNumber = -Infinity;

  for (let i = 0; i < input.length; i++) {
    const item = input[i];
    if (item > largestNumber) {
      secondLargestNumber = largestNumber;
      largestNumber = item;
    } else if (item > secondLargestNumber && item < largestNumber) {
      secondLargestNumber = item;
    }
  }

  if (secondLargestNumber === -Infinity) return null;

  return secondLargestNumber;
}

console.log(findSecondLargestNumber([10, 10, 9, 8])); // 9
console.log(findSecondLargestNumber([5, 5, 5, 5])); // null
console.log(findSecondLargestNumber([7, 7, 3, 2, 1])); // 3
console.log(findSecondLargestNumber([-1, -2, -3, -4])); // -2
console.log(findSecondLargestNumber([-10, -5, -1])); // -5
console.log(findSecondLargestNumber([5])); // null
console.log(findSecondLargestNumber([])); // null
console.log(findSecondLargestNumber([100, 100])); // null
console.log(findSecondLargestNumber([3, -2, 7, 7, 5, 1])); // 5
console.log(findSecondLargestNumber([0, -1, -2, -3])); // -1
console.log(findSecondLargestNumber([999999, 888888, 777777])); // 888888
console.log(findSecondLargestNumber([Number.MAX_SAFE_INTEGER, 1, 2])); // 2
