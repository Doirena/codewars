"use strict";
function test(t1, t2) {
  if (t1 === t2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function solution(str){
  let wor1 = str.split('');
  let revWo = wor1.reverse();
  console.log(revWo.join(''));
  return revWo.join('');
}

test(solution('world') == 'dlrow')