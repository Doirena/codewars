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

function sortByLength (array) {
        let arrN=[];
  for (let i = 0; i < array.length; i++) {
      const element = array[i].split('').length;
      arrN.push(element);
  }
  for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
         if (arrN[i]>arrN[j]) {
             let bla = arrN[i];
             let blaa = array[i];
             arrN[i] = arrN[j];
             array[i] = array[j];
             arrN[j] = bla;
             array[j] = blaa
         }
          
      }
      
  }

    
    return array;
  };

test(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);

test(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);

test(sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]);


//trumpiau
// function sortByLength (array) {
//     return array.sort((a,b) => a.length - b.length);
//   };