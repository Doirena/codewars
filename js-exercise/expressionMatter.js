"use strict";
function test(t1, t2) {
  if (t1 === t2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function expressionMatter(a, b, c) {

    let sum1 =a*(b+c);
    let sum2 =a*b*c;
    let sum3 =a+b*c;
    let sum4 =(a+b)*c;
    let sum5 =a+b+c;
    let allsum = [sum1, sum2, sum3, sum4, sum5]
    // console.log(allsum);

    return Math.max(...allsum)
  }

test(expressionMatter(2, 1, 2), 6);
test(expressionMatter(2, 1, 1), 4);
test(expressionMatter(1, 1, 1), 3);
test(expressionMatter(1, 2, 3), 9);
test(expressionMatter(1, 3, 1), 5);
test(expressionMatter(2, 2, 2), 8);
