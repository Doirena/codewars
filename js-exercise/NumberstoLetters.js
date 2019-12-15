"use strict";
function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}

function switcher(x){
    const allSymbol = ['z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a','!','?', ' '];
    const word = [];
    let letter;
    for (let i = 0; i <x.length; i++) {
        const a = x[i];
        for (let j = 0; j<allSymbol.length; j++) {
           letter = allSymbol[a-1];             
        }
        word.push(letter);        
    }
    const words = word.join('');

    console.log(words);
    
   return words; 
}
test(switcher(['4', '24']), 'wc');
test(switcher(['26','19','20','11','27','17','2','29','21','5','10','3','18','14','7','10','18','22','24','23','10','8','4','13','29','19']),'ahgp!jy fvqximtqiecdqswn h'); 
test(switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars');
test(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']), 'btswmdsbd kkw'); 
