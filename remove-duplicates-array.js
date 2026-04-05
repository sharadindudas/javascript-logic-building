function removeDuplicates(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Please provide an array");
  }

  if (arr.length === 0) return [];

  const seen = new Map();
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (!seen.has(item)) {
      seen.set(item, true);
      result.push(item);
    }
  }

  return result;
}

console.log("============ Remove Duplications using Map ============");
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
console.log(removeDuplicates(["a", "b", "a", "c"])); // ["a", "b", "c"]
console.log(removeDuplicates([1, "1", 1])); // [1, "1"]
console.log(removeDuplicates([])); // []
console.log(removeDuplicates([true, false, true])); // [true, false]

function removeDuplicatesUsingSet(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Please provide an array");
  }

  if (arr.length === 0) return [];

  const seen = new Set();
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }
  return result;
}
console.log("============ Remove Duplications using Set ============");
console.log(removeDuplicatesUsingSet([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
console.log(removeDuplicatesUsingSet(["a", "b", "a", "c"])); // ["a", "b", "c"]
console.log(removeDuplicatesUsingSet([1, "1", 1])); // [1, "1"]
console.log(removeDuplicatesUsingSet([])); // []
console.log(removeDuplicatesUsingSet([true, false, true])); // [true, false]
