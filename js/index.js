var count = 0;
var hoursCount = 0;

var first= false;
var addH = document.querySelector('.check');
addH.innerHTML = "You will See Here Your Statistics"
var main = document.getElementById("main");
var isChecked = false;
var divOld = document.getElementById("div")

function countUp(){
  count = count + 5;
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

  if(first === false) {
          var div = document.createElement('div');
  div.innerHTML = "<h3>Did you Walk 5 Minutes at:</h3><b><p class='time'> " + h + ':' + m + ':' + s + "</b></p><form action='#'><input type='radio' name='walk' value='yes' onclick='countUp()'>Yes!<br><input type='radio'  name='walk' value='no' >No. :(<br></form>";
div.className = 'box';
  $( "#main" ).prepend( div );
    first = true;
    hoursCount+= 30;
  }
  
var shoot = new Audio("https://raw.githubusercontent.com/yurinkab/game-boxhit/master/lose.wav");
  

  
if(s % 10 === 0) {

  console.log("its been 30 Minutes! Start Walking!!!");


      var div = document.createElement('div');
  div.innerHTML = "<h3>Did you Walk 5 Minutes at:</h3><b><p class='time'> " + h + ':' + m + ':' + s + "</b></p><form action='#'><input type='radio' name='walk' value='yes' onclick='countUp()'>Yes!<br><input type='radio'  name='walk' value='no' >No. :(<br></form>";
div.className = 'box';
    if (count >= 10) {
  $(".walking").css({opacity: "0.3"});
}
  if (count >= 20) {
  $(".walking").css({opacity: "0.7"});
}
  if (count >= 30) {
  $(".walking").css({opacity: "1"});
}
  if(s % 10 === 0) {
  addH.innerHTML = "You Walked: "+count+" minutes in the past "+hoursCount + " Minutes";
    hoursCount+= 30;
   
}
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
  shoot.play();
  
}

}

setInterval(checkTime, 1000);


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