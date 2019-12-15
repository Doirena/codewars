"use strict";
function test( t1, t2 ) {
    // const first = t1.toString();   
    // const second = t2.toString();
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}

function createPhoneNumber(numbers){
//   console.log(numbers);
  numbers.splice(0, 0,'(');
  numbers.splice(4, 0,')');
  numbers.splice(5, 0,' ');
  numbers.splice(9, 0,'-');
  const number = numbers.join('')  
//   console.log(numbers);
//   console.log(number);

  

  
    return number;
}

test(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
test(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
test(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");