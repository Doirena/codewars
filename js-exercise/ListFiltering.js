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
// function filter_list(l) {
//     let array = [];
//     console.log(l);
//     for (let i = 0; i < l.length; i++) {
//         const element = l[i];
//         if (typeof element === 'number') {
//             array.push(element);
//         }
        
//     }

//     return array;
// }

//Trumpesnis
function filter_list(l) {
    let array = [];
 array = l.filter(item=>typeof item === 'number' );
    console.log(array);
    
    return array;
}

test(filter_list([1,2,'a','b']),[1,2])
test(filter_list([1,'a','b',0,15]),[1,0,15])
test(filter_list([1,2,'aasf','1','123',123]),[1,2,123])