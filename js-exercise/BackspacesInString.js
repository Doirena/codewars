"use strict";
function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}
function cleanString(s) {   
    let result = []
    for(let i = 0; i < s.length; i++){
      if(s[i] != '#'){
        result.push(s[i])
      } else {
        result.pop()
      }
    }
    console.log(result);
    
    return result.join('')
  };
  // REGEXP
//   function cleanString(s) {

//     if (s.includes("#")) {
//         return cleanString(s.replace(/[\s\S]?\#/s, ""));
//     }
    
//     return s;
// };
test(cleanString('abc#d##c'), "ac")
test(cleanString('ac###c'), "")
test(cleanString('abc####d##c#'), "" )
//function clean_string(s) {
//     s=s.split``
// 	for (let i=0;i<s.length;i++){
//     if (s[i]==='#'){
//       s[i]=''
//       s[i-1]=''
//       s=s.filter(v=>v!=='')
//       i-=2
//     }
//   }
//   return s.join``
// };