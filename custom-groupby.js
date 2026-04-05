// Write a function groupBy that takes an array of objects and a property name (as a string), and returns an object where the keys are the unique values of the specified property, and the values are arrays of objects that have that property value.

function groupBy(arr, key) {
  const result = {};

  for (const item of arr) {
    if (!(key in item)) continue;

    const groupKey = item[key];

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(item);
  }

  return result;
}
console.log(
  groupBy(
    [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 25 },
    ],
    "age",
  ),
);
console.log(
  groupBy(
    [
      { id: 1, category: "Electronics" },
      { id: 2, category: "Clothing" },
      { id: 3, category: "Electronics" },
    ],
    "category",
  ),
);

function groupByV2(arr, key) {
  if (!Array.isArray(arr)) {
    throw new Error("Please provide an array");
  }
  return arr.reduce((acc, curr) => {
    const groupKey = curr[key];
    if (groupKey === undefined) return acc;

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }

    acc[groupKey].push(curr);
    return acc;
  }, {});
}
console.log(
  groupByV2(
    [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 25 },
    ],
    "age",
  ),
);
console.log(
  groupByV2(
    [
      { id: 1, category: "Electronics" },
      { id: 2, category: "Clothing" },
      { id: 3, category: "Electronics" },
    ],
    "category",
  ),
);
