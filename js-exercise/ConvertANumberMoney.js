"use strict";
function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}
function numberToMoney(n) {
    let k =  Math.floor(n * 100) / 100;
    
    
    if((k/1000)<1){
        return k.toString();
    } else{
        //iskirstome
    k=k.toString().split('');
    let step=0;
    for (let i = 0; i < k.length; i++) {
        const element = k[i];
        if(element === "."){
           break;
        }else {
            step++;
        }
    }
  
    let nr = step-3;
    k.splice(nr, 0, ',');
    // console.log(k.join(''));

    return k.join('');
    }
  }
test(numberToMoney(2546.2562),     '2,546.25');
test(numberToMoney(1500.342626),   '1,500.34');
test(numberToMoney(100.2134),      '100.21');
test(numberToMoney(28450.738602371617),      '28,450.73');

//trumpesnis
// var numberToMoney = function(n) {
//     return (Math.trunc(n*100)/100).toLocaleString()
//   };