"use strict";
function test(t1, t2) {
  if (t1 === t2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function getMiddle(s) {
  if (s.length === 1) {
    return s;
  }
  let i = s.length / 2;
  if (i % 1 !== 0) {
    i = Math.floor(i);
  } else{
    return s[i-1]+s[i];
  } 
  return s[i];
}

test(getMiddle("test"), "es");
test(getMiddle("testing"), "t");
test(getMiddle("middle"), "dd");
test(getMiddle("A"), "A");
