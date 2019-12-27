"use strict";
function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}

function getDivisorsCnt(n){
    let div=0;
   for (let i = 1; i <= n; i++) {      
     if(n % i === 0){
         div++;
     }
       
   }
   
 return div;  
}

test(getDivisorsCnt(1) , 1);
test(getDivisorsCnt(10) , 4);
test(getDivisorsCnt(11) , 2);
test(getDivisorsCnt(54) , 8);