"use strict";
function test(t1, t2) {
  if (t1 === t2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// function sumNestedNumbers(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//       let element = arr[i];
//       if (Array.isArray(element)) {
//           element = Number(element.toString()) * Number(element.toString());
//           console.log(element);
          
//       }
//       sum+=element;
//   }
//   console.log(sum);
//  return sum; 
// }

// function sumNestedNumbers(arr) {
//     let sum = 0;
//     let suma =0;
//     let done =false;
//     while(done === false){
//         for (let j = 0; j < arr.length; j++) {
//             let element = arr[j];
//             if(!Array.isArray(element)){
//                 done = true;                
//             }
//             if(Array.isArray(element)){
//                 if (element.length >= 2) {
                    
//                     for (let j = 0; j < element.length; j++) {
//                         let ele = element[j];
//                         if(!Array.isArray(ele)){
//                             ele = Math.pow(ele,j+2);
                            
//                         }else{
//                             ele =Math.pow(Number(ele.toString()), j+2) ;
                            
//                         }
//                       suma+=ele;
//                     }
//                     element = suma;
//                 }else{
//                 element = Number(element.toString())*Number(element.toString());
//                 }   
//             }
//             sum += element; 
                          
//         }
//     }   
//    return sum; 
//   }
// function sumNestedNumbers(arr, power = 1) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//       if (typeof arr[i] === "number") {
//         sum += Math.pow(arr[i], power);      
//       } else {
//         sum += sumNestedNumbers(arr[i], power + 1);
//         console.log(sumNestedNumbers(arr[i], power));
        
//       }
//     }
//     return sum;
//   }



// test(sumNestedNumbers([1, 3]), 4);
// test(sumNestedNumbers([1, [2], 3]), 8);
// test(sumNestedNumbers([1, [2], 3, [4, [5]]]), 149);
// test(sumNestedNumbers([1, [2], 3, [4, [5]], [5]]), 149);

function sumNestedNumbers(arr, degr = 1){
 let suma = 0;
  for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if(!Array.isArray(element)){
          suma +=Math.pow(element, degr);
      }else{
        suma +=sumNestedNumbers(arr[i], degr+1);
      }
      
  }
 
    return suma;
}
test(sumNestedNumbers([1, 3]), 4);
test(sumNestedNumbers([1, [2], 3]), 8);
test(sumNestedNumbers([1, [2], 3, [4, [5]]]), 149);
// test(sumNestedNumbers([1, [2], 3, [4, [5]], [5]]), 149);
