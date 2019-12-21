"use strict";
function test(t1, t2) {
  if (t1 === t2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function rowSumOddNumbers(n) {
 
    return Math.pow(n,3);
}

test(rowSumOddNumbers(1), 1);
test(rowSumOddNumbers(42), 74088);