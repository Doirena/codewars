"use strict";
function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}

function bonusTime(salary, bonus) {

   if (bonus === true ) {
       let sum = salary * 10
      return "\u00A3"+sum;  
   } else{       
    return "\u00A3"+salary;
    }
}

//kitu budu:

test(bonusTime(10000, true), '£100000');
test(bonusTime(25000, true), '£250000');
test(bonusTime(10000, false), '£10000');
test(bonusTime(60000, false), '£60000');
test(bonusTime(2, true), '£20');
test(bonusTime(78, false), '£78');
test(bonusTime(67890, true), '£678900');