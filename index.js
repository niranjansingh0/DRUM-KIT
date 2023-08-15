var Number=document.querySelectorAll(".drum").length;
for( var i=0; i<Number;i++){

 document.querySelectorAll(".drum")[i].addEventListener("click", music);
 function music(){
 var buttonInnerHTML=this.innerHTML;

 makesound(buttonInnerHTML);
 buttonAnimation(buttonInnerHTML);

 }
}

  document.addEventListener("keypress",music1);

 function  music1 (event){
 var keypress1=event.key;
  makesound(keypress1);
buttonAnimation(keypress1);
 
   }
 function makesound(key1){
    
  
  switch (key1) {
    case "w":
   var tom1= new Audio("sounds/tom-1.mp3");
   tom1.play();
        break;

    case "a":
        var tom2= new Audio("sounds/tom-2.mp3");
     tom2.play();
      break;

  case "s":
    var tom3=new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
 
    case "d":
        var tom4= new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

      case "k":
        var snare= new Audio("sounds/snare.mp3");
        snare.play();
        break;


    case "j":
        var crash= new Audio("sounds/crash.mp3");
        crash.play();
        break;

    case "l":
        var kick= new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
    default: console.log(buttonInnerHTML);
    
  }


 }
  function buttonAnimation(current){
  var active=document.querySelector("."+current);
  active.classList.add("pressed");
  setTimeout(clickback,100);
  function clickback(){
    active.classList.remove("pressed");
  }

  }




/*document.querySelectorAll("button")[1].addEventListener("click", handle1);

function handle1(){

    alert("a click");
}
document.querySelectorAll("button")[2].addEventListener("click",handle2);
function handle2(){

    alert("s is click");
}
document.querySelectorAll("button")[3].addEventListener("click",handle3);
function handle3(){
    alert("d is click");
}
document.querySelectorAll("button")[4].addEventListener("click",handle4);
function handle4(){
    alert("j is click");
}
document.querySelectorAll("button")[5].addEventListener("click",handle5);
function handle5(){
    alert("k is click");
}
document.querySelectorAll("button")[6].addEventListener("click",handle6);
function handle6(){
    alert("l is click");
}*/
