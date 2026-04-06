function secondLargestNumber(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Please provide an array");
  }

  if (arr.length < 2) return null;

  let largest = -Infinity,
    second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (value > largest) {
      second = largest;
      largest = value;
    } else if (value > second && value < largest) {
      second = value;
    }
  }

  return second === -Infinity ? null : second;
}
console.log(secondLargestNumber([10, 10, 9, 8])); // 9
console.log(secondLargestNumber([5, 5, 5, 5])); // null
console.log(secondLargestNumber([7, 7, 3, 2, 1])); // 3
console.log(secondLargestNumber([-1, -2, -3, -4])); // -2
console.log(secondLargestNumber([-10, -5, -1])); // -5
console.log(secondLargestNumber([5])); // null
console.log(secondLargestNumber([])); // null
console.log(secondLargestNumber([100, 100])); // null
console.log(secondLargestNumber([3, -2, 7, 7, 5, 1])); // 5
console.log(secondLargestNumber([0, -1, -2, -3])); // -1
console.log(secondLargestNumber([999999, 888888, 777777])); // 888888
console.log(secondLargestNumber([Number.MAX_SAFE_INTEGER, 1, 2])); // 2
