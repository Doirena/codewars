"use strict";
function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}
// function mouthSize(animal) {
//     let animalsName=animal.toLowerCase()
//     if(animalsName === "alligator"){
//         return 'small';
//     } else{
//         return 'wide';
//     }
// }
//kitas budas
function mouthSize(animal) {
    let animalsName=animal.toLowerCase()
 return (animalsName === "alligator") ? 'small': 'wide';
}

test(mouthSize("toucan"),"wide")
test(mouthSize("ant bear"),"wide")
test(mouthSize("alligator"),"small")
test(mouthSize("Alligator"),"small")