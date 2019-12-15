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


function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    let percent =( 100 - percentLossByMonth) / 100; 
    let oldCar = startPriceOld;
    let newCar = startPriceNew;
    let difference = oldCar - newCar;
    let months = 0;
    let saveperMonth = 0;
    // console.log(months, difference);
     
    if (difference < 0) {
        //paleidziame cikla kuriame skaiciuojame mensius ir sumas
        for (let i = 1; i<Infinity; i++) {
            //pridedame procentus kai nelyginis
            if (i % 2 !== 0) {
                percent = percent + 0
            } else{
                percent = percent - 0.005;
            }
            
            saveperMonth = saveperMonth + savingperMonth;
            oldCar = ( oldCar * percent );
            newCar = newCar * percent;
            difference = oldCar - newCar + saveperMonth;
            // console.log('oldCar', oldCar);
            // console.log(newCar);
            console.log(difference, percent,i);
            
            months++;
        

            // console.log(months);
            if (difference >= 0){
                break;
                
            }       
            
        }
        
    } else {
        const answer = [months, difference];
        console.log(answer);
        
        return answer;
    }

    console.log([months, Math.round(difference)]);
    
    return [months, Math.round(difference)];
  }


test(nbMonths(2000, 8000, 1000, 1.5), [6, 766])
test(nbMonths(12000, 8000, 1000, 1.5) ,[0, 4000])