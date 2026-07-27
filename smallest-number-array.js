function findSmallestNumber(input) {
  if (!Array.isArray(input)) {
    throw new Error("Please provide an array");
  }

  if (input.length === 0) return null;

  let smallestNumber = input[0];
  for (let i = 1; i < input.length; i++) {
    if (input[i] < smallestNumber) {
      smallestNumber = input[i];
    }
  }

  return smallestNumber;
}
console.log(findSmallestNumber([3, 1, 2])); // 1
console.log(findSmallestNumber([-5, 2, -3, 4])); // -5
console.log(findSmallestNumber([0, 2, 3])); // 0
console.log(findSmallestNumber([])); // null
