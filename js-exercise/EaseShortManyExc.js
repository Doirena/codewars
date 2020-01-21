// "use strict";
// function test( t1, t2 ) {
//     if ( t1 === t2 ) {
//         console.log(true)
//     } else {
//         console.log(false);
//     }
// }


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



//8KYU Squash the bugs
// function findLongest(str) {
//     //   console.log(str.length);
      
//         var spl = str.split(" ");
//         var longest = 0;
        
//         for (var i = 0; i < spl.length; i++) {
//           if (spl[i].length > longest) {
//             longest = spl[i].length
//           }
//         }
//           return longest;
//       }
//     test(findLongest("The quick white fox jumped around the massive dog"), 7);
//     test(findLongest("Take me to tinseltown with you"), 10); 
//     test(findLongest("Sausage chops"), 7); 
//     test(findLongest("Wind your body and wiggle your belly"), 6); 
//     test(findLongest("Lets all go on holiday"), 7);


// 8KYU Count of positives / sum of negatives
// function countPositivesSumNegatives(input) {
//     if (input === null || input.length < 1){
//         return [];

//     }
//     let step = 0;
//     let sum = 0;
//     for (let i = 0; i < input.length; i++) {
//         const element = input[i];
//         if (element >0){
//             step++;
//         } else{
//             sum+=element
//         }
        
//     }
//     // console.log(sum);
//     // console.log(step);
    




//     return [step, sum];
// }

// test(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]), [10, -65]);
// test(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]), [8, -50]);
// test(countPositivesSumNegatives(null), []);

// 8KYU Removing Elements
// 8KYU 
// function removeEveryOther(arr){
//    let newArr = [];
//    for (let i = 0; i < arr.length; i+=2) {
//        const element = arr[i];
//        newArr.push(element);
//    }
//     console.log(newArr);
    


//     return newArr;
//   }

// test(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
// test(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
// test(removeEveryOther([[1, 2]]), [[1, 2]]);
// test(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
// // TRumpinys su firlter:
// function removeEveryOther(arr){
//     return arr.filter(function(elem, index) {
//       return index % 2 === 0;
//     });
//   }

// 8KYU Generate range of integers
// function generateRange(min, max, step){
// let arr = [];
// while(min<=max){
//   console.log(min);
  
// arr.push(min);
// min=min+step;

//   }
//   console.log(arr);
  
// return arr;
// }
// generateRange(2, 10, 2);

// function londonCityHacker(array) {
//   console.log(array);
  
// let bus = 0;
// let sub = 0;


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];


//     if(typeof(element) === "string" ){
//       sub++;
//     }
//     if(typeof(element) === "number" ){
//       bus++;
//     }

//    } 
//    let sum =(bus*1.50+sub*2.40).toFixed(2);


// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   if(typeof(element) === "number" &&  typeof(array[i+1]) === "number"){
//     sum=(sum-1.50).toFixed(2);
//     i++;
//   }
  
// }
//   // console.log("£"+sum);

 

//   return "£"+sum;
// }

// test(londonCityHacker([12, 'Central', 'Circle', 21]), "£7.80");
// test(londonCityHacker(['Piccidilly', 56]), "£3.90");
// test(londonCityHacker(['Northern', 'Central', 'Circle']), "£7.20");
// test(londonCityHacker(['Piccidilly', 56, 93, 243]), "£5.40");
// test(londonCityHacker([386, 56, 1, 876]), "£3.00");
// test(londonCityHacker([]), "£0.00");
// test(londonCityHacker(['Victoria', 51, 76, 'Waterloo & City', 'Jubilee']), "£8.70");




// function add() {
//   let sum =0;
// for (let i = 0; i < arguments.length; i++) {
//   const element = arguments[i];
//   sum +=element*(i+1); 
// }
//   console.log(sum);
//   return sum;
//  }

// test(add(100,200,300),1400)

//8KYU Convert number to reversed array of digits

function digitize(n) {
 let array= [];
 n=n.toString();
 n=n.split('');

 console.log(n.length);
  array=n.reverse();
  let arr= [];
  for (let i = 0; i < array.length; i++) {
    const element = Number(array[i]);
    arr.push(element);


    
  }
  console.log(arr);
  
 
  return arr; 
}

test(digitize(35231),[1,3,2,5,3]);