"use strict";
function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}

function sorting(x){
        for(let i=0; i<x.length; i++ ){     
            for (let j=0; j<i; j++){
                let litteI= x[i].toLowerCase()
                let litteJ = x[j].toLowerCase()
                if (litteI < litteJ){
                    let blabla = x[i];
                        x[i] = x[j];
                        x[j] = blabla;
                }                
            }
        }
        console.log(x);


   return x;
}

test(sorting(["Hello", "there", "I'm", "fine"]),["fine", "Hello", "I'm", "there"]);
test(sorting(["C", "d", "a", "B"]),["a", "B", "C", "d"]);