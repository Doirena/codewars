"use strict";
function test( t1, t2 ) {
    const first = t1.toString();   
    const second = t2.toString();
    if ( first === second ) {
        console.log(true)
    } else {
        console.log(false);
    }
}
function between(a, b) {
let array = [];


    for (let i = a; i <= b; i++) {
        array.push(i);     
        
    }
return array;  
}



test(between(1, 4), ([1, 2, 3, 4]));
test(between(-2, 2), ([-2, -1, 0, 1, 2]));