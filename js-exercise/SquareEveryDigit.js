"use strict";
function test(t1, t2) {
  if (t1 === t2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function squareDigits(num){
    let pow=[];
    num =num.toString();
    num=num.split('')
       
    for (let i = 0; i < num.length; i++) {
        const element = num[i];

       let bla =Math.pow(element, 2);
       pow.push(bla);

    }
   
    let convNum = pow.join('');
    return Number(convNum);

  }

  test(squareDigits(9119), 811181);

 // One line task: Square Every Digit 6 level
//   sd=x=> +String(x).split('').map(function(x){return +x* +x;}).join('');

//   sd=x=>+Array.from(''+x,v=>v*v).join('')
//   sd=x=>+(x+'').replace(/\d/g,m=>m*m);
//   //dar Trumpesnis
//   sd=n=>+(''+n).replace(/./g,x=>x*x)

