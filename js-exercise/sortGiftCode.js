"use strict";
function test(t1, t2) {
  if (t1 === t2) {
    console.log(true);
  } else {
    console.log(false);
  }
}
function sortGiftCode(code){
    return code.split('').sort().join('');
  }

test(sortGiftCode('abcdef'), 'abcdef');
test(sortGiftCode('pqksuvy'), 'kpqsuvy');
test(sortGiftCode('zyxwvutsrqponmlkjihgfedcba'), 'abcdefghijklmnopqrstuvwxyz');