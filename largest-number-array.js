function findLargest(arr) {
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) return null;

  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (typeof value !== "number" || !Number.isFinite(value)) {
      return false;
    }

    if (value > max) {
      max = value;
    }
  }

  return max;
}
console.log(findLargest([3, 1, 2])); // 3
console.log(findLargest([-5, 2, -3, 4])); // 4
console.log(findLargest([0, 2, 3])); // 3
console.log(findLargest([])); // null
