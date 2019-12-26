"use strict";
function test(t1, t2) {
  if (t1 === t2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function sumEvenNumbers(input) {
    let sum =0;
    console.log(input);
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if(element%2 === 0){
            sum +=element

        }
        
    }
    return sum
  }

  
  test(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),30,)