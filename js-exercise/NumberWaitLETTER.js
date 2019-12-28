"use strict";
function test(t1, t2) {
  if (t1 === t2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function doMath(s){
  console.log(s);
  
    let num=[];
    let lett=[];
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        const ele= parseInt(element);       
        if(typeof(ele) === 'number' &&  ele.toString() !== 'NaN' || element === ' ' ){
            num.push(element);
        }
    }
    let nums =num.join('').split(' ');
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        const ele= parseInt(element);        
        if(ele.toString() === 'NaN' && element !==' ' ){
            lett.push(element);
        } 
    }
    console.log(lett);
    console.log(nums);
    //find dubli
    const filtered = lett.filter((el, index) => lett.indexOf(el) !== index)
    const duplicates = [...new Set(filtered)];
    let g=0;
    console.log(duplicates)
    //count how many dublic and put number of each letter if it has dublic
    for (let i = 0; i < lett.length; i++) {
      for (let j = 0; j < duplicates.length; j++) {
        const element = duplicates[j];
        if (lett[i]===element) {
          lett[i] = lett[i]+g;
          g++;
          if (g===10) {
            g=g*9;
          }
        }
        
      }
      
    }


    // sort
    for (let i = 0; i < lett.length; i++) {
        for (let j = i; j < lett.length; j++) {
            if (lett[i]>lett[j]) {
                let bla = lett[i];
                let blaa = nums[i];
                lett[i] = lett[j];
                nums[i] = nums[j];
                lett[j] = bla;
                nums[j] = blaa;
            }
            
        }
        
    }

console.log(lett);
console.log(nums);
let math = ["+", "-", "*","/","+", "-", "*","/","+", "-", "*","/","+", "-", "*","/","+", "-", "*","/","+", "-", "*","/","+", "-", "*","/","+", "-", "*","/"];

// console.log(math);
let sum =nums[0];
nums = nums.map(Number);
// console.log(nums);
for (let i = 1; i <nums.length; i++) { 
 sum = eval(sum+math[i-1]+nums[i]);
  // console.log(sum);
}

console.log(sum);

 return Math.round(sum);
  }

// test(doMath("24z6 1z23 y369 89z 900b"),1414);
// test(doMath("24z6 1x23 y369 89a 900b"),1299);
// test(doMath("10a 90x 14b 78u 45a 7b 34y"),60);
// test(doMath("111a 222c 444y 777u 999a 888p"),1459);
// test(doMath("1z 2t 3q 5x 6u 8a 7b"),8);
// test(doMath("57y64 x1816 7w80 7d169 c330 789a6 18y223 899x9 6c49 5w21 w830"),1532);
test(doMath("3y99 d897 5z9253 c7597 d275 w9445 2w72 y439 7a2774 86z1 59a154 833z79"),36296762121);


