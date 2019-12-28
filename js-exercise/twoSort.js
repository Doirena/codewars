"use strict";
function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}
function twoSort(s) {
    let ss=[];
    s.sort();
    let first = s[0].split('');
    let snowy = '***';
    for (let i = 0; i < first.length-1; i++) {
        const element = first[i]+snowy;
        ss.push(element);
    }
    
    let last=first[first.length-1];
    
    ss.push(last);
    // console.log(ss.join(''));
    return ss.join('');
}
test(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
test(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 

console.log('*****');


