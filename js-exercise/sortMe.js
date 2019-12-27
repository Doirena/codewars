"use strict";
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

function sortMe(arr){
 let bla = [];
 
 return bla;
  }

 test(sortMe(['acvd','bcc']), ['bcc','acvd'])
 test(sortMe(["14", "13"]),["13", "14"])
 test(sortMe(["asdf", "asdf", "14", "13"]), ["13", "14", "asdf", "asdf"])
 test(sortMe(["bsde", "asdf", 14, "13"]), ["13", 14, "bsde", "asdf"])
 test(sortMe(["asdf", 14, "13","asdf"]), ["13", 14, "asdf", "asdf"]);
 test(sortMe(["xxxf","aaaf","kf","f","ooooof"]), ["xxxf","aaaf","kf","f","ooooof"]);
 test(sortMe(["xdxf","xcxf","xbxf","xaxf"]), ["xdxf","xcxf","xbxf","xaxf"]);
 test(sortMe(["xdxf","xcxa","xbxf","xaxf"]), ["xcxa","xdxf","xbxf","xaxf"]);