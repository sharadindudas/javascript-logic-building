// Design a function sum that can take any number of arguments and return their total. The function should work for both fixed and variable number of arguments using JavaScript features. Only numerical arguments will be provided.

function sum(...args) {
  if (args.length === 0) return 0;

  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

function sumV2(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(100, 200, 300, 400));
console.log(sumV2(100, 200, 300, 400));
