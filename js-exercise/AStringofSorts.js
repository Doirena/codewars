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

function sortString(string,ordering) {
    let yra = [];
    let nera = [];
    // console.log(string);
    
    string = string.split('');
    ordering = ordering.split('');

    for (let i = 0; i < ordering.length; i++) {
        const element = ordering[i];
        if( nera.indexOf(element) < 0) {
             nera.push(element);
        }
        
    }
    ordering=nera;
    
    
    for (let i = 0; i < ordering.length; i++) {
        const elemi = ordering[i];
        for (let j = 0; j <string.length; j++) {
            const elemj =string[j];
            if ( elemi === elemj ) {
                yra.push(elemi);
            }
            
        }
        
    }
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        if (yra.indexOf(element) < 0) {
            yra.push(element);
            
        }
        
    }  
    string = yra.join('');
    
    // if (string.join('') !== yra.join('')) {
    //     string = yra.join('');
    // } 
    // else{
    //     return ordering.join('');
    // }


      
    // console.log(string);
    


    return string;
  }

// function sortString(string,o) {
//     var ordering="";
//     for (var i=0; i<o.length; ++i)
//       if (ordering.indexOf(o[i])==-1)
//         ordering+=o[i];
//     var ans="";
//     for (var i=0; i<ordering.length; ++i)
//       for (var j=0; j<string.length; ++j)
//         if (ordering[i]==string[j])
//           ans+=string[j];
//       for (var i=0; i <string.length; ++i)
//         if (ordering.indexOf(string[i])==-1)
//           ans+=string[i];
//           console.log(ans);
          
//     return ans;
//   }

test(sortString("foos", "of"), "oofs");
test(sortString("string", "gnirts"), "gnirts");
test(sortString("banana","abnabn"), "aaabnn");
test(sortString("dfg","banana"), "dfg");
test(sortString("banana","ban"), "baaann");
test(sortString("lewxaraaq","lqewxar"), "lqewxaaar");
test(sortString("fumyarhncujlj","njjcfumyarhl"), "njjcfuumyarhl");