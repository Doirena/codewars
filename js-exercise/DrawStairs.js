"use strict";
function test(t1, t2) {
  if (t1 === t2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function drawStairs(n) {
    let stair = [];
    let space = " ";
    if (n<=0) {
        return [];
    }


    if(n<= 1){
       return "I"
    } else{
        let a=1;        
        while(a<n){
            stair = stair +"I\n"+space;
            space += " ";
            a++;
        }
        
    }
    console.log(stair +'I');
    return stair+'I'
  }

test(drawStairs(1), "I", "The first step has no padding on the left, just an 'I'");
test(drawStairs(3), "I\n I\n  I", "There's something wrong with these 3 steps");
test(drawStairs(5), "I\n I\n  I\n   I\n    I", "5-step stairs no good");
test(drawStairs(0), [], "The first step has no padding on the left, just an 'I'");
