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
//budas kaip paprastai su patikrinimais:
// function maps(x){
//     const bla = x;
// if (!Array.isArray(x)) {
//     return console.log('Pateikta netinkamo tipo reikšmė.');
// }
// for (let i = 0; i < bla.length; i++) {
//     const element = bla[i]*2;
//   if (typeof(element) !== 'number' ||
//      isFinite(element) === false){
//         return console.log('sarase yra ne skaicius');  
//      }
//         bla[i]=element;
     
// }
//     console.log(bla);
    
//     return bla;
    
// }

// // maps('ddd');
// // maps([1, 'b', 3]);

//naudojant Map metoda:
function maps(x){

    const map1 = x.map(i => i * 2);

    return map1
}


maps([1, 2, 3]);
// [ 2, 4, 6 ]
test(maps([2, 4, 6]), [4, 8, 12]);
test(maps([1, 2, 3]), [2, 4, 6]);
test(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
test(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 

