"use strict";
function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}
function isSortedAndHow(array) {
    console.log(array);
    
    let step = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i]<array[i+1]){
            step++;
        }  
    }
    if (step === array.length-1) {
        return 'yes, ascending';
    } else if (step === 0) {
        return 'yes, descending';
    } else{
        return 'no';
    }

}
test(isSortedAndHow([1, 2]), 'yes, ascending');
test(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
test(isSortedAndHow([4, 2, 30]), 'no');
//Trumpesnis
// const isSortedAndHow = a => {
//     const s = a.join``;
//     return s === a.sort((x, y) => x - y).join`` ? 'yes, ascending' :
//            s === a.sort((x, y) => y - x).join`` ? 'yes, descending' : 'no';
//   }