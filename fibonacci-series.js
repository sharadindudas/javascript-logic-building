function generateFibonacci(n) {
  if (typeof n !== "number") {
    throw new Error("Please provide a number");
  }

  if (n <= 0) return [];
  if (n === 1) return [0];

  const result = [0, 1];

  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
}

// console.log(generateFibonacci(5)); // [0, 1, 1, 2, 3]
// console.log(generateFibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
// console.log(generateFibonacci(1)); // [0]
// console.log(generateFibonacci(0)); // []

/*
    out = [0 ,1] || 2 < 5  // first iteration
    out[0] + out[1] => out[2] (0 + 1 = 1)

    out = [0, 1, 1] || 3 < 5 // second iteration 
    out[1] + out[2] => out[3] (1 + 1 = 2)

    out = [0, 1, 1, 2] || 4 < 5 // third iteration
    out[2] + out[3] = out[4] (1 + 2 = 3)

    out = [0, 1, 1, 2, 3] || 5 < 5 // iteration ends
*/

function generateFibonacciUsingNumber(n) {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    throw new Error("Please provide a valid integer");
  }

  if (n <= 0) return "";
  if (n === 1) return "0";

  let n1 = 0,
    n2 = 1,
    str = "0 1";

  for (let i = 2; i < n; i++) {
    let n3 = n1 + n2;
    str += " " + n3;
    n1 = n2;
    n2 = n3;
  }
  return str;
}

console.log(generateFibonacciUsingNumber(5)); // 0, 1, 1, 2, 3
console.log(generateFibonacciUsingNumber(8)); // 0, 1, 1, 2, 3, 5, 8, 13
console.log(generateFibonacciUsingNumber(1)); // 0
console.log(generateFibonacciUsingNumber(0)); // nothing

/*
    n1 = 0, n2 = 1 || 2 < 5  // first iteration
    n3 = n1 + n2 (0 + 1 = 1)
    n1 = n2 (1)
    n2 = n3 (1)

    n1 = 1, n2 = 1 || 3 < 5 // second iteration 
    n3 = n1 + n2 (1 + 1 = 2)
    n1 = n2 (1)
    n2 = n3 (2)

    n1 = 1 n2 = 2 || 4 < 5 // third iteration
    n3 = n1 + n2 (1 + 2 = 3)
    n1 = n2 (2)
    n2 = n3 (3)

    n1 = 2 n2 = 3 || 5 < 5 // iteration ends
*/
