"use strict";
function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}

// function getDivisorsCnt(n){
//     let div=0;
//    for (let i = 1; i <= n; i++) {      
//      if(n % i === 0){
//          div++;
//      }
       
//    }
   
//  return div;  
// }

// test(getDivisorsCnt(1) , 1);
// test(getDivisorsCnt(10) , 4);
// test(getDivisorsCnt(11) , 2);
// test(getDivisorsCnt(54) , 8);


// "use strict";
// function test( t1, t2 ) {
//     const first = t1.toString();   
//     const second = t2.toString();
//     if ( first === second ) {
//         console.log(true)
//     } else {
//         console.log(false);
//     }
// }

// function stringToNumber (str){
     
//     return Number(str);
//   }
// test(stringToNumber("1234"),1234)
// test(stringToNumber("605"), 605)
// test(stringToNumber("1405"),1405)
// test(stringToNumber("-7"),  -7)



// function swapValues(arr) {
//     var args = Array.prototype.slice.call(arr);
//     var temp = args[0];
//     args[0] = args[1];
//     args[1] = temp;
// }
// var arr = [1,2] 
// swapValues(arr);
// test(arr[0], 2, "Failed swapping numbers")
// test(arr[1], 1, "Failed swapping numbers")

// function abbrevName(name){
//     name=name.split(' ');
//     // console.log(name);
//     let n = (name[0].split('')[0]+"."+name[1].split('')[0]);
//     // console.log(n);
//     return n.toUpperCase()
    
    
   
//    }
// test(abbrevName("Sam Harris"), "S.H");
// test(abbrevName("Patrick Feenan"), "P.F");
// test(abbrevName("Evan Cole"), "E.C");
// test(abbrevName("P Favuzzi"), "P.F");
// test(abbrevName("David Mendieta"), "D.M");

// function cleanString(str){
//     var count = 0;
//     var abc = "abc";
//     for(var i = 0; i < str.length; i++)
//     { 
//        if(str[i] = "\b") //at least i think its treated as one character...
//        count++;
//     }
//     abc = abc.slice(0, count * -1);
//     console.log(abc+str);
// }
