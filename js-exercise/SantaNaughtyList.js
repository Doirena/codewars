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

function findChildren(santasList, children) {
    let list = [];
    santasList = sort(santasList);
    // children = sort(children);
    // console.log(santasList);
    // console.log(children);
   for (let i = 0; i < santasList.length; i++) {
       const element = santasList[i];
       for (let j = 0; j < children.length; j++) {
           const ele = children[j];
           if (element === ele ) {
            if(list.indexOf(element) < 0) {
                list.push(element);
            }
           }
           
       }
       
   }
   console.log(list);
   
    return list;
  }

  function sort(listas){
      listas = listas.sort();
    for(let i=0; i<listas.length; i++ ){     
        for (let j=0; j<i; j++){
            let litteI= listas[i].toLowerCase()
            let litteJ = listas[j].toLowerCase()
            if (litteI < litteJ){
                let blabla = listas[i];
                    listas[i] = listas[j];
                    listas[j] = blabla;
            }
        }
    }

 
    return listas;
  }
// test(findChildren(["Wason", "Dackson", "Rordan", "Vohnny"], ["Dason", "Pordan", "Lennifer"]), ["Jason", "Jordan"]);
test(findChildren(["Jason", "Jackson", "Jordan", "Johnny", "Sam","sAm"], ["sAm","Jason", "Jordan", "Jennifer"]), ["Jason", "Jordan","sAm"]);
test(findChildren(["jASon", "JAsoN", "JaSON", "jasON"], ["JasoN", "jASOn", "JAsoN", "jASon", "JASON"]), ["JAsoN", "jASon"]);
test(findChildren(["Jason", "James", "Johnson"], ["Jason", "James", "JJ"]), ["James", "Jason"]);
test(findChildren(["jASon", "JAsoN", "JaSON", "jasON"], ["JasoN", "jASOn", "JAsoN", "jASon", "JASON","JAsoN"]), ["JAsoN", "jASon"]);




