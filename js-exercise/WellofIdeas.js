"use strict";
function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}

function well(x){
    let step = 0;
    const lala = x.indexOf('good');
    console.log(lala);
    if (lala > -1){
    for (let i = 0; i<=x.length; i++) {
        const element = x[i];
        if (element === 'good'){
            step++;       
        } 
    }
        const count = step;
        console.log('***',count);
        if (count <= 2){
            return 'Publish!';
        } 
        if(count > 2){
            return 'I smell a series!';
        }
    } else{
        return 'Fail!';
    }  
    
}

test(well(['bad', 'bad', 'bad']), 'Fail!');
test(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
test(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!')