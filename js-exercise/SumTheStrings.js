"use strict";
function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}

function sumStr(a,b) {
    let firstNumber =+a; 
    let secondNumber =+b;
    let sum =(firstNumber+secondNumber).toString();    
  return sum;
}

test(sumStr("4","5"), "9");
test(sumStr("34","5"), "39");