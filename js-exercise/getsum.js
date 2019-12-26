"use strict";
function test(t1, t2) {
  if (t1 === t2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function getSum( a,b ){
let sum = 0;
// console.log(b);

if (a>b ) {
    while(b<=a){
        sum+=b;
        b++;
        console.log(sum);
    }
} else{
    while(a<=b){
        sum+=a;
        a++;
        // console.log(sum);
    }
}
    // console.log(sum);
    return sum
}

test(getSum(0,-1),-1);
// test(getSum(0,1),1);
// test(getSum(-1,2),2);
// test(getSum(-542,519),-12213);
test(getSum(526,201),118501);