"use strict";
function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}

function sumOfDifferences(arr) {
    let sum = 0;
    if ( arr.length === 0 || arr.length === 1 ){
           return 0;
       } else{
        arr.sort((a,b)=> {return b - a})      
        for (let i = 0; i <arr.length; i++) {
            if (isNaN(arr[i-1])){
                continue;
            }
            sum  += arr[i-1] - arr[i];      
        }  
    }       

    return sum;
}

// test(sumOfDifferences([1, 2, 10]), 9);
// test(sumOfDifferences([-3, -2, -1]), 2);
// test(sumOfDifferences([]), 0);
// test(sumOfDifferences([1]), 0);
test(sumOfDifferences([4,1,-5,7,-4,3,6,-7,-8,6,0,-6,0,0,1,4,5,6,6,4,-8,0,-3,1,-2,3,3]), 15);
test(sumOfDifferences([-2,0,-3,2]), 5);
