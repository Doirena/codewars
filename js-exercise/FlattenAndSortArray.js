"use strict";
function test( t1, t2 ) {
    const first = t1.toString();   
    const second = t2.toString();
    if ( first === second ) {
        console.log(true)
    } else {
        console.log(false);
    }
}

function flattenAndSort(array) {
//    array = flatten(array);
array = Array.prototype.concat.apply([], array);
    
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i]>array[j]) {
                let bla = array[i];
                 array[i]=array[j];
                array[j] = bla;   
            }
        }
        
    }
    return array;
  }

 test(flattenAndSort([]), []);
 test(flattenAndSort([[], [1]]), [1]);
 test(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
 test(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);

 //Funkcija funkcijoje:
//  function flattenAndSort(array) {
//     return flatten(array).sort((a, b) => a - b);
//   }
  
//   function flatten(array) {
//     return array.reduce(function(acc, el) {
//       return acc.concat(Array.isArray(el) ? flatten(el) : el);
//     }, []);
//   }