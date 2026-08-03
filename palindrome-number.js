function isPalindrome(n) {
  if (n < 0) return false;

  const temp = n;
  let rev = 0;

  while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  return temp === rev;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(11));
