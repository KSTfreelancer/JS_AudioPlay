

for(var x=0; x<=3; x++){
  var btn = document.querySelectorAll(".btn");
// console.log(btn[x])
  btn[x].addEventListener('click',function(){
    text = this.innerHTML;
    console.log(text)
    audio(text);
    animation(text);
    
  });
};

document.addEventListener('keypress',function(e){
  var text = e.key;
  console.log(text)
  audio(text);
  animation(text);

});

function audio(text){
  switch(text){
      case "a":
        var audio = new Audio("media/Tone_2.mp3");
        audio.play();
        break;
      case "b":
        var audio = new Audio("media/Tone_3.mp3");
        audio.play();
        break;
      case "c":
        var audio = new Audio("media/Tone_4.mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("media/Tone_5.mp3");
        audio.play();
       break;
    };
};

function animation(text){

  var btnAnimation = document.querySelector("."+text);
  btnAnimation.classList.add("activ");

  setTimeout(function(){
      btnAnimation.classList.remove("activ");

  },2000);

};

