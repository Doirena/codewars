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

// function sortMe(arr){
//  let bla = [];
// //  console.log(arr);
 
//  let count=0;
//  for (let i = 0; i < arr.length; i++) {
//      const element = arr[i];
//      if (typeof (element) === 'number') {
//          count++;         
//      }  
//  }
//  if (count>0) {
//     bla=arr.sort((a, b) => `{$a}`.charCodeAt(a.length - 1) - `{$b}`.charCodeAt(b.length - 1)); 
//  } else{
//     bla=arr.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)); 
//  }


 
// //  console.log(bla);
 
//  return bla;
//   }
function sortMe(arr){
    return arr.sort((a, b) => a.toString().charCodeAt(a.toString().length - 1) - b.toString().charCodeAt(b.toString().length - 1));
  }


 test(sortMe(['acvd','bcc']), ['bcc','acvd'])
 test(sortMe(["14", "13"]),["13", "14"])
 test(sortMe(["asdf", "asdf", "14", "13"]), ["13", "14", "asdf", "asdf"])
 test(sortMe(["bsde", "asdf", 14, "13"]), ["13", 14, "bsde", "asdf"])
 test(sortMe(["asdf", 14, "13","asdf"]), ["13", 14, "asdf", "asdf"]);
 test(sortMe(["xxxf","aaaf","kf","f","ooooof"]), ["xxxf","aaaf","kf","f","ooooof"]);
 test(sortMe(["xdxf","xcxf","xbxf","xaxf"]), ["xdxf","xcxf","xbxf","xaxf"]);
 test(sortMe(["xdxf","xcxa","xbxf","xaxf"]), ["xcxa","xdxf","xbxf","xaxf"]);
 function sortMe(arr){
    return arr.sort((a, b) => a.toString().charCodeAt(a.toString().length - 1) - b.toString().charCodeAt(b.toString().length - 1));
  }
  function sortMe(arr){
    return arr.sort(function(a,b){
        a = a.toString().substr(-1),b = b.toString().substr(-1);      
        if (a>b) return 1;
        if (a<b) return -1;
        return 0;
    });
  }