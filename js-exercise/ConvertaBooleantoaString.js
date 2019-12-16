"use strict";
function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}
// function booleanToString(b){
//    if (b){
//        return 'true';
//    } else {
//        return 'false'
//    }

//   }
  //trumpesnis
  function booleanToString(b){
    return b ? 'true' : 'false'
 
   }
test(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
test(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');