"use strict";
function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}
function sumDigits(number) {   
    let sum = 0;
    let num = [number];
    var digits = num.toString().split('');
    var realDigits = digits.map(Number)  
    
 for (let i = 0; i < realDigits.length; i++) {
     let element = realDigits[i];             
     if (element.toString() === 'NaN') {
       element = 0;     
     }
     sum += element;
     

    }
    return sum;
}
test(sumDigits(10), 1);
test(sumDigits(99), 18);
test(sumDigits(-32), 5);
