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

function last(x){    
    const array = x.split(" ");
    // console.log(array);
    
    // for(let i=array.length-1; i>=0; i-- ){
    //     console.log(array[i]);
    //     // for (let j=0; j<i; j++){
    //     //     if (array[i] < array[j]){
    //     //         let blabla = array[i];
    //     //             array[i] = array[j];
    //     //             array[j] = blabla;
    //     //     }                
    //     // }
    // }
    // // console.log(array);
    return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
    // return x;
}





test(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
test(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
test(last('take me to semynak'), ['take', 'me', 'semynak', 'to']); 