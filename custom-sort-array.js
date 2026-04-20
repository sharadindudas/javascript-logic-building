/* Write a function that takes an array containing a mix of single-character strings and numbers, and returns a new sorted array.

📥 Input
    An array arr containing:
    Single-character strings (e.g., 'a', 'Z')
    Numbers (e.g., 1, 42)
    The array is unsorted.

📤 Output
    Return a new array such that:
    All characters come first, sorted in ascending alphabetical order (case-sensitive, so 'A' < 'a').
    All numbers come next, sorted in ascending numerical order.

    Input:  ['g', 's', 5, 2, 'c', 'e', 6, 1, 'a']
    Output: ['a', 'c', 'e', 'g', 's', 1, 2, 5, 6]

    Input:  [3, 'z', 'b', 10, 'a', 1, 'd']
    Output: ['a', 'b', 'd', 'z', 1, 3, 10]
*/

function customSort(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Please provide an array");
  }

  const chars = [],
    nums = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      chars.push(arr[i]);
    } else {
      nums.push(arr[i]);
    }
  }

  const sortedChars =  bubbleSort(chars);
  const sortedNums =  bubbleSort(nums)

  return [...sortedChars, ...sortedNums]
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
        if(arr[j] > arr[ j + 1]){
            let temp = arr[j]
            arr[j] = arr[ j + 1]
            arr[j + 1] = temp
        }
    }
  }

  return arr
}

console.log(customSort(["g", "s", 5, 2, "c", "e", 6, 1, "a"]));