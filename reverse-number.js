const INT_MAX = 2 ** 31 - 1; // 2147483647
const INT_MIN = -(2 ** 31); // -2147483648

const MAX_LIMIT = Math.trunc(INT_MAX / 10); // 214748364
const MIN_LIMIT = Math.trunc(INT_MIN / 10); // -214748364

function reverseNumber(n) {
  if (!Number.isInteger(n)) {
    throw new Error("Please provide a valid integer");
  }

  let rev = 0;

  while (n !== 0) {
    const digit = n % 10;
    n = Math.trunc(n / 10);

    if (rev > MAX_LIMIT || (rev === MAX_LIMIT && digit > INT_MAX % 10)) {
      return 0;
    }

    if (rev < MIN_LIMIT || (rev === MIN_LIMIT && digit < INT_MIN % 10)) {
      return 0;
    }

    rev = rev * 10 + digit;
  }

  return rev;
}

console.log(reverseNumber(123)); // 321
console.log(reverseNumber(-123)); // -321
console.log(reverseNumber(120)); // 21
console.log(reverseNumber(0)); // 0
console.log(reverseNumber(1534236469)); // 0 (overflows)
console.log(reverseNumber(-2147483648)); // 0 (overflows)
