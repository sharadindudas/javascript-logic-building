// Brute force --- O(n2)
function findMissingNumber(nums) {
  const n = nums.length;

  for (let i = 0; i <= n; i++) {
    let found = false;
    for (let j = 0; j < n; j++) {
      if (nums[j] === i) {
        found = true;
        break;
      }
    }

    if (!found) {
      return i;
    }
  }
}

console.log(findMissingNumber([3, 0, 1]));
console.log(findMissingNumber([0, 1]));
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(findMissingNumber([0]));

// Hashmap --- O(n)
function findMissingNumberHashMap(nums) {
 const present = new Map()
 
 for(let i = 0; i < nums.length; i++){
   present.set(nums[i], true)
 }
 
 for(let i = 0; i <= nums.length ;i++){
   if(!present.has(i)){
      return i
   }
 }
 
}
console.log(findMissingNumberHashMap([3, 0, 1]));
console.log(findMissingNumberHashMap([0, 1]));
console.log(findMissingNumberHashMap([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(findMissingNumberHashMap([0]));
