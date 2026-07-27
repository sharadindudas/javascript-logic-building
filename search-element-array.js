function searchElement(input, element) {
  if (!Array.isArray(input)) {
    throw new Error("Please provide an array");
  }

  for (let i = 0; i < input.length; i++) {
    if (input[i] === element) {
      return i;
    }
  }
  return -1;
}
console.log(searchElement([4, 2, 0, 10, 8, 30], 10));
console.log(searchElement([4, 2, 0, 10, 8, 30], 5));
