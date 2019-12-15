"use strict";
function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}

function sumMix(x){
    let sum = 0
    for (let i = 0; i < x.length; i++) {
        let element = x[i];
        if(typeof(element) !== 'number'){
            element =+x[i];
        }
        

        sum +=element
        
    }
    

return sum;
}
test(sumMix([9, 3, '7', '3']), 22);
test(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
test(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);