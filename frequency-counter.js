// Write a function that counts the frequency of the number of elements inside an array
function frequencyCounter(input) {
  if (!Array.isArray(input)) {
    throw new Error("Please provide an array");
  }

  if (input.length === 0) return {};

  const freq = new Map();
  for (let i = 0; i < input.length; i++) {
    const value = input[i];

    if (!freq.has(value)) {
      freq.set(value, 1);
    } else {
      freq.set(value, freq.get(value) + 1);
    }
  }

  return freq;
}
console.log(frequencyCounter([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4]));
console.log(frequencyCounter([]));
