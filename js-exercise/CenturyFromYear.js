"use strict";
function test(t1, t2) {
  if (t1 === t2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function century(year) {
    // let simt = 100;
    // let bla = year.toString();
    // console.log(bla.split(''));
    // console.log(year);
    // // for (let i = 0; i < array.length; i++) {
    // //     const element = array[i];
        
    // // }
    
    
    
    // return;
    let simtmetis = 0;
    while (year > 0){
      year = year - 100;
      simtmetis = simtmetis + 1;      
    }
    return simtmetis;
  }
  

test(century(1705), 18, 'Testing for year 1705');
test(century(1900), 19, 'Testing for year 1900');
test(century(1601), 17, 'Testing for year 1601');
test(century(2000), 20, 'Testing for year 2000');
test(century(89), 1, 'Testing for year 89');