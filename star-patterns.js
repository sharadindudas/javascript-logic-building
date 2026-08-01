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
function pattern4(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str += i + 1;
    }
    console.log(str);
  }
}
console.log("============== Pattern 4 ==============");
pattern4(5);

/*
    1 2 3 4 5
    1 2 3 4
    1 2 3
    1 2
    1
*/
function pattern5(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n - i; j++) {
      str += j + 1;
    }
    console.log(str);
  }
}
console.log("============== Pattern 5 ==============");
pattern5(5);

/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */
function pattern6(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n - i - 1; j++) {
      str += " ";
    }
    for (let k = 0; k <= i; k++) {
      str += "*";
    }
    console.log(str);
  }
}
console.log("============== Pattern 6 ==============");
pattern6(5);

/*
 1
 1 0 
 1 0 1
 1 0 1 0
 1 0 1 0 1
*/
function pattern7(n) {
  for (let i = 0; i < n; i++) {
    let str = "",
      flip = 1;
    for (let j = 0; j <= i; j++) {
      str += flip;
      flip = flip === 1 ? 0 : 1;
    }
    console.log(str);
  }
}
console.log("============== Pattern 7 ==============");
pattern7(5);

/*
 1
 0 1 
 0 1 0
 1 0 1 0
 1 0 1 0 1
*/
function pattern8(n) {
  let flip = 1;
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str += flip;
      flip = flip === 1 ? 0 : 1;
    }
    console.log(str);
  }
}
console.log("============== Pattern 8 ==============");
pattern8(5);
