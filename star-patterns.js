/*
 * * * * *
 * * * * *
 * * * * *
 * * * * *
 * * * * *
 */
function pattern1(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      str += "*";
    }
    console.log(str);
  }
}
console.log("============== Pattern 1 ==============");
pattern1(5);

/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */
function pattern2(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    // for(let j = 0; j <= i; j++){
    for (let j = 0; j < i + 1; j++) {
      str += "*";
    }
    console.log(str);
  }
}
console.log("============== Pattern 2 ==============");
pattern2(5);

/*
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
*/
function pattern3(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    let count = 0;
    for (let j = 0; j <= i; j++) {
      str += ++count;
    }
    console.log(str);
  }
}
console.log("============== Pattern 3 ==============");
pattern3(5);

/*
    1
    2 2
    3 3 3
    4 4 4 4
    5 5 5 5 5
*/
function pattern4(n){
   for (let i = 0; i < n; i++) {
    let str = ""
    for(let j = 0; j <= i; j++){
      str += i + 1
    }
    console.log(str)
   }
}
console.log("============== Pattern 4 ==============");
pattern4(5);