"use strict";
function test(t1, t2) {
  if (t1 === t2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function duplicateCount(text){
  let count=[];
  let bla =[];
  text=text.split(''); 
  for (let i = 0; i < text.length; i++) {
    const element = text[i].toLowerCase();
   count.push(element);
  } 

let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
bla=([...new Set(findDuplicates(count))]) // Unique duplicates
  
  return bla.length;


}

test(duplicateCount(""), 0);
test(duplicateCount("abcde"), 0);
test(duplicateCount("aabbcde"), 2);
test(duplicateCount("aabBcde"), 2,"should ignore case");
test(duplicateCount("Indivisibility"), 1)
test(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")