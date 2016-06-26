var tipbox=document.querySelector('.tip');
tipbox.addEventListener('click', function(){
  $(".tip").hide();
});
var count = 0;
var hoursCount = 0;
var firstTime=false;
var first= false;
var addH = document.querySelector('.check');
addH.innerHTML = "You will See Here Your Statistics"
var main = document.getElementById("main");
var isChecked = false;
var divOld = document.getElementById("div")

function minutesUp(){
  count+= 5;
    addH.innerHTML = "You Walked: "+count+" minutes out of "+hoursCount + " Minutes";
    if (count >= 10) {
  $(".walking").css({opacity: "0.3"});
}
  if (count >= 20) {
  $(".walking").css({opacity: "0.7"});
}
  if (count >= 30) {
  $(".walking").css({opacity: "1"});
}
}


function checkTime() {
var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
  if(m < 10) {
    m = "0" + m;
  }
  if(s < 10) {
    s = "0" + s;
  }

  console.log("its been 30 Minutes! Start Walking!!!");


      var div = document.createElement('div');
  div.innerHTML = "<b><p class='time'> " + h + ':' + m + ':' + s + "</b></p><h3>Time to Walk! <br>Did you Walk 5 Minutes?</h3><form action='#'><input type='radio' name='walk' value='yes' onclick='minutesUp()'>Yes<br><input type='radio'  name='walk' value='no' >No<br></form>";
div.className = 'box';
  
      hoursCount+= 10;

  addH.innerHTML = "You Walked: "+count+" minutes out of "+hoursCount + " Minutes";
   

  if (isChecked === true) {
    $( "#main" ).prepend( div );
    // div.insertBefore(div);
    console.log("true");


} else {
  console.log("First Time!");
  $( "#main" ).prepend( div );
  isChecked = true;
}


  

  
  
  console.log(h + ':' + m + ':' + s);


}


checkTime();
setInterval(checkTime, 10000);



// function checkTime() {
// var date = new Date();
// var h = date.getHours();
// var m = date.getMinutes();
// var s = date.getSeconds();

// var shoot = new Audio("https://raw.githubusercontent.com/yurinkab/game-boxhit/master/lose.wav");

// if(m % 30 === 0) {
  
//   console.log("its been 30 Minutes! Start Walking!!!");
//   console.log(h + ':' + m + ':' + s);
//   shoot.play();
// }

// }

// setInterval(checkTime, 1000);