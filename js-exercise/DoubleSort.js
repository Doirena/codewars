"use strict";
function test(t1, t2) {
  if (t1 === t2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function dbSort(list){
  let listN=[];
  let listS=[];
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (typeof(element) === 'string' ){
      listS.push(element);
      listS.sort()  
    }else {
      listN.push(element);
      listN.sort((a,b)=> a-b)
    }
}

  let final = listN.concat(listS)
 console.log(final);
 
  return final;
  }

  test(dbSort([6, 2, 3, 4, 5]), [2, 3, 4, 5, 6]);
  test(dbSort([14, 32, 3, 5, 5]), [3, 5, 5, 14, 32]);
  test(dbSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  test(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]), [0,2,2,"Apple","Banana","Mango","Orange"]);
  test(dbSort(["C", "W", "W", "W", 1, 2, 0]), [0,1,2,"C","W","W","W"]);