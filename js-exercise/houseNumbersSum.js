"use strict";
function test(t1, t2) {
  if (t1 === t2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// function houseNumbersSum(inputArray) {
//   let sum = 0;
//     for (let i= 0; i< inputArray.length; i++){
//       const element = inputArray[i];
//       sum +=element;
//       if (element === 0) {
//           break;
//       }
//   }


//   return sum;
// }

// test(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]), 11);

// test( houseNumbersSum([4, 2, 1, 6, 0]),13)

// test( houseNumbersSum([4, 1, 2, 3, 0, 10, 2]),10)

// test( houseNumbersSum([0, 1, 2, 3, 4, 5]),0)


//Su While
function houseNumbersSum(inputArray) {
    let sum = 0;
    let i= 0;
      while (inputArray[i] !== 0 ) {
          sum +=inputArray[i++];
      }
      
    return sum;
  }
test(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]), 11);

test( houseNumbersSum([4, 2, 1, 6, 0]),13)

test( houseNumbersSum([4, 1, 2, 3, 0, 10, 2]),10)

test( houseNumbersSum([0, 1, 2, 3, 4, 5]),0)