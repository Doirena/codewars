"use strict";
function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}

function unusualFive() {
    const word = 'lempa';
    const length = word.length;
    
    
    return length;
  }

  test(unusualFive(), 5);
