// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

$("#shoot").click(function(){
  let choice = $("#input").val();
  $("#userChoice").text(choice);
 computer = Math.random();
  $(".test").text(computer);
  if(computer > .6){
    $("#computerChoice").text("Rock");
    
  }
  else if(.3 < computer < .6 ){
    $("#computerChoice").text("Paper");
    
  }
  else{
    $("#computerChoice").text("Scissors");
    
  }
});


let winner = "";


let computer = 0;



