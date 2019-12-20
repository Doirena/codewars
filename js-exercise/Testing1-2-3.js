"use strict";
function test( t1, t2 ) {
    const first = t1.toString();   
    const second = t2.toString();
    // first === second 
    if (  first === second ) {
        console.log(true)
    } else {
        console.log(false);
    }
}

function number(array){
    let arr = [];
    if(array.length<0){
        return;
    } else{
        for (let i = 0; i < array.length; i++) {
            const element = array[i];           
            arr.push(i+1 +': '+ element);
            console.log(element);   
        }
        console.log(arr);
        
    }

    return arr;
  }

test(number([]), [], 'Empty array should return empty array');
test(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers')
// test(bla(["a", "b", "c"]))