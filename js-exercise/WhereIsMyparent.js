"use strict";
function test(t1, t2) {
  if (t1 === t2) {
    console.log(true);
  } else {
    console.log(false);
  }
}


function findChildren(motChil){
let list = Array.from(motChil).sort();
for (let i = 0; i < list.length; i++) {
  for (let j=0; j<i; j++){
      let litteI= list[i].toLowerCase()
      let litteJ = list[j].toLowerCase()
          if (litteI < litteJ){
              let blabla = list[i];
              list[i] = list[j];
              list[j] = blabla;
      }                 
  }
}
  // console.log(list.join(''));
  


  
return list.join('');
}

test(findChildren("beeeEBb"), "BbbEeee");
test(findChildren("uwwWUueEe"), "EeeUuuWww");
