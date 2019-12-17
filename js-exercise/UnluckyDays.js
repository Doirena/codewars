"use strict";
function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}
function unluckyDays(year){
let count = 0;
for (var month=0; month<12; month++) {
    const d = new Date(year,month,13);
    if(d.getDay() == 5){
      count++;
   }
}
return count;                            
}




test(unluckyDays(1586), 1, "should be: 1");
test(unluckyDays(1001), 3, "should be: 3");
test(unluckyDays(2819), 2, "should be: 2");
test(unluckyDays(2792), 2, "should be: 2");
test(unluckyDays(2723), 2, "should be: 2");
test(unluckyDays(1909), 1, "should be: 1");
test(unluckyDays(1812), 2, "should be: 2");
test(unluckyDays(1618), 2, "should be: 2");
test(unluckyDays(2132), 1, "should be: 1");
test(unluckyDays(2065), 3, "should be: 3");

//Kitas metodas
function numberOfFridaythe13thsIn(jahr){
    var d = new Date();
    var months = 0;
    // d.setFullYear(jahr, months, 13);
    var counter = 0;
    while(months <= 11) {
        months++;
        d.setFullYear(jahr, months, 13);
        if(d.getDay() == 5 && d.getDate() == 13) {
          counter++;
       }
    }
    return counter;                            
}
console.log('****');

test(numberOfFridaythe13thsIn(1586), 1, "should be: 1");
test(numberOfFridaythe13thsIn(1001), 3, "should be: 3");
test(numberOfFridaythe13thsIn(2819), 2, "should be: 2");
test(numberOfFridaythe13thsIn(2792), 2, "should be: 2");
test(numberOfFridaythe13thsIn(2723), 2, "should be: 2");
test(numberOfFridaythe13thsIn(1909), 1, "should be: 1");
test(numberOfFridaythe13thsIn(1812), 2, "should be: 2");
test(numberOfFridaythe13thsIn(1618), 2, "should be: 2");
test(numberOfFridaythe13thsIn(2132), 1, "should be: 1");
test(numberOfFridaythe13thsIn(2065), 3, "should be: 3");

//Paprastas ciklas:
// function unluckyDays(year){
//     let unlucky = 0;
//     for (var i = 0; i < 12; i++) {
//       if(new Date(year, i, 13).getDay() === 5){
//         unlucky++;
//       }
//     }
//     return unlucky;
//   }

  //sau 
  function unluckyDays1(y){
    let m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep', 'Oct', 'Nov', 'Dec'],c = 0;
  
    for(let i = 0; i < m.length;i++) {
        let d = new Date(`${m[i]} 13, ${y}`).toDateString()
        console.log(d);
        
      d.includes('Fri') && c++  
  
    }
    return c
  }
  test(unluckyDays1(1586), 1, "should be: 1");
