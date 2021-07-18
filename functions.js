
var colors=['Pink', 'Yellow','Brown', 'Red', 'White', 'Brown', 'Blue'];

$(document).ready(function () {

  $("h3").hide();

  $("#easy").click(function(){
    $("h3").hide();

    $("#textok").toggle();
  });

  

  $("#medium").click(function(){
    $("h3").hide();
    $("#textok").toggle();
  });

  

  $("#hard").click(function(){
    $("h3").hide();
    $("#textok").toggle();
  });

});




function StartGame(level)
   {

    $('#submit').removeAttr('disabled');
    var score= 0;
    document.getElementById("demo1").innerHTML=colors[0];
    score = document.getElementById("demo2").value

    var easy = document.getElementById("easy").value;
    var medium = document.getElementById("medium").value;
    var hard = document.getElementById("hard").value;
 console.log("start");


 switch (level) {
   case easy:
   console.log("easy");
   setInterval(randomize, 3000);
     break;

   case medium:
     console.log("medium");
     setInterval(randomize, 2500);
     break;

   case hard:
     console.log("hard");
     setInterval(randomize, 2000);
     break;
 }
}

function randomize()
   {
       shuffleArray();
       document.getElementById("demo1").innerHTML=colors[0];
   }

function shuffleArray()
   {
       for (var i = colors.length - 1; i > 0; i--) {
           var j = Math.floor(Math.random() * (i + 1));
           var temp = colors[i];
           colors[i] = colors[j];
           colors[j] = temp;
       }
   }

function game(val)
    {
    var score = 0;
    score = document.getElementById("demo2").value;
    var color=  document.getElementById("demo1").innerHTML;
    if (color == val)
        score++;
        else
        score--;
        document.getElementById("demo2").value=score;
    }
    
  function Rotator(start_from){
    var phrases = ["Какой-то текст 1","Какой-то текст 2","Какой-то текст 3"];
    var total = phrases.length;
    var interval = 5000;
    if(void 0 === start_from){
        start_from = 0;
    }

  }  
 
  
