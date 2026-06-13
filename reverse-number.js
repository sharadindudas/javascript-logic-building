function reverseNumber(input) {
  if (typeof input !== "number") {
    throw new Error("Please provide the input");
  }

  if (!Number.isInteger(input)) {
    throw new Error("Please provide a valid integer");
  }

  let rev = 0;
  while (input > 0) {
    let digit = input % 10;
    rev = rev * 10 + digit;
    input = Math.floor(input / 10);
  }

  return rev;
}
console.log(reverseNumber(123)); // 321
