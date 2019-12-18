"use strict";
function test(t1, t2) {
  if (t1 === t2) {
    console.log(true);
  } else {
    console.log(false);
  }
}


function cubeOdd(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (typeof(element) === 'string' ) {
            return;
        } else{
            if (element%2 !== 0){            
            sum += Math.pow(element, 3); 
            }
        }
    }
    console.log(sum);
       
    return sum;
}

    test(cubeOdd([1, 2, 3, 4]), 28);
    test(cubeOdd([-3,-2,2,3]), 0);
    test(cubeOdd(["a",12,9,"z",42]), undefined);

