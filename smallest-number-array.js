function findSmallest(arr) {
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) return null;

  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (typeof value !== "number" || !Number.isFinite(value)) {
      return false;
    }

    if (value < min) {
      min = value;
    }
  }

  return min;
}
console.log(findSmallest([3, 1, 2])); // 1
console.log(findSmallest([-5, 2, -3, 4])); // -5
console.log(findSmallest([0, 2, 3])); // 0
console.log(findSmallest([])); // null
