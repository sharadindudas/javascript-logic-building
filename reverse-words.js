// Write a function reverseWords that takes a sentence string as input and returns a new string where each word is reversed, but the order of the words remains the same. Words are separated by spaces. Preserve the original spacing

function reverseWords(sentence) {
  if (typeof sentence !== "string") {
    throw new Error("Please provide a string");
  }

  return sentence
    .split(" ")
    .map((item) => {
      let output = "";
      for (let i = item.length - 1; i >= 0; i--) {
        output += item[i];
      }
      return output;
    })
    .join(" ");
}
console.log(reverseWords("Hello World"));
console.log(reverseWords("JavaScript is fun"));
console.log(reverseWords("   Lead  and Trail  "));
console.log(reverseWords(""));
console.log(reverseWords("OneWord"));
