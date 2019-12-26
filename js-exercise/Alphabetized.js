"use strict";
function test(t1, t2) {
  if (t1 === t2) {
    console.log(true);
  } else {
    console.log(false);
  }
}


// function alphabetized(s) {
// let word = s.split('');
// let words = [];
// for (let i = 0; i < word.length; i++) {
//     const element = word[i];
//     if (element.length === 1 && element.match(/[a-z]/i)) {
//         words.push(element);
//     }
// }
// words.sort();
// const alph = words.join('');

// let alphword=alph.split('').sort(customSortfunc).join('');
// console.log(alphword);

// return alphword;
// }

// function customSortfunc(a,b){ 
//     var lca = a.toLowerCase(), lcb = b.toLowerCase();
//      return lca > lcb ? 1 : lca < lcb ? -1 : 0;
//   }

// // test(alphabetized('The Holy Bible'), 'BbeehHilloTy')
// // test(alphabetized('The ! Holy Bible'), 'BbeehHilloTy')
// // test(alphabetized('The !@2 Holy Bible'), 'BbeehHilloTy')
// test(alphabetized('aDdeEhiIiKkkNnotuuU'), 'aDdEehIiiKkkNnotuuU')

function alphabetized(s){
    s = s.replace(/\s+|\W+|\d+|[_]+/g, "");
    return s.split('')
      .map(function(x, i){ return [x, i]; })
      .sort(function([a, i], [b, j]){
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a == b)
          return i - j;
        else if (a < b)
          return -1;
        else
          return 1;
        })
        .map(function([x, i]){ return x; })
        .join('');
  }
  
  console.log(alphabetized("The Holy Bible"));

  //kitas variantas
//   function alphabetized(str) {
//     let result = "";
//     for (let i = 97; i < 123; i++){
//      for (let k = 0; k < str.length; k++){
//        if (str[k].toLowerCase().charCodeAt() === i) {
//          result += str[k];
//        }
//      }
//     }   
//     return result
//   }