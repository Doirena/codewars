"use strict";
function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}
//|| 'e'|| 'i' || 'o' || 'u'
function getCount(str) {
    var vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u' ]
    console.log(str);
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        console.log(element);
        let bla = vowels.indexOf(element);        
        if (bla >= 0){
            vowelsCount++;
            // console.log('**', vowelsCount);        
        } 
        
        
    }

    
    return vowelsCount;
  }

  test(getCount("abra ca  ' 'dabra"), 5);