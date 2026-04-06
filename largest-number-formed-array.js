function formLargestNumber(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Please provide an array");
  }

  const result = arr
    .map(String)
    .sort((a, b) => b + a - (a + b))
    .join("");

  return result[0] === "0" ? "0" : result;
}
console.log(formLargestNumber([3, 30, 34, 5, 9])); // 9534330
