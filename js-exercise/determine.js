"use strict";
function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}
function howMuchILoveYou(nb) {

    if (nb === 6){
        return "not at all";
    }else{
   let dal = nb-(Math.floor(nb/6))*6;   
     if (dal===1){
    return "I love you"
    }
     if (dal===2){
    return "a little"
    }
     if (dal===3){
    return "a lot"
    }
    if (dal===4){
        return "passionately"
        }
    if (dal===5){
        return "madly"
        }
    if (dal===6 || dal ===0){
        return "not at all"
        }
    }
        
 }
//  test(howMuchILoveYou(106),"passionately")
//  test(howMuchILoveYou(7),"I love you")
//  test(howMuchILoveYou(3),"a lot")
//  test(howMuchILoveYou(6),"not at all")
 test(howMuchILoveYou(420),"not at all")

 //Paprastesnis
 function howMuchILoveYou(nbPetals) {
    let phrase = {    
      0: "not at all",
      1: "I love you",
      2: "a little",
      3: "a lot",
      4: "passionately",
      5: "madly"
    }
    return phrase[nbPetals%6]
  }