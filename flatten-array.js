function flattenArray(arr, result = []) {
  if (!Array.isArray(arr)) {
    throw new Error("Please provide an array");
  }

  if (arr.length === 0) return [];

  for (const item of arr) {
    if (!Array.isArray(item)) {
      result.push(item);
    } else {
      flattenArray(item, result);
    }
  }

  return result;
}
console.log(flattenArray([1, [2, [3, 4], 5], 6]));
console.log(flattenArray([["a"], ["b", ["c", "d"]], "e"]));
