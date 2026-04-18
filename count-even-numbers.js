// Given an array arr of numbers, return the count of elements that are even integers (divisible by 2). The value 0 counts as even.

function countEvens(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (typeof item !== "number" || !Number.isFinite(item)) {
      return false;
    }

    if (Number.isInteger(item) && item % 2 === 0) {
      count++;
    }
  }

  return count;
}
console.log(countEvens([1, 2, 3, 4]));
console.log(countEvens([-2, -5, -8]));
console.log(countEvens([0, 2, 3]));
console.log(countEvens([]));
