
var number_drums = document.querySelectorAll(".drum").length;
for(var n = 0; n<number_drums;n++){

  document.querySelectorAll(".drum")[n].addEventListener("click", function (){
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "w":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;

      case "a":
        var kickbass = new Audio('sounds/kickbass.mp3');
        kickbass.play();
        break;

      case "s":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;

      case "d":
        var tom = new Audio('sounds/tom.mp3');
        tom.play();
        break;

      case "j":
        var tom2 = new Audio('sounds/tom2.mp3');
        tom2.play();
        break;

      case "k":
        var tom3 = new Audio('sounds/tom3.mp3');
          tom3.play();
          break;

      case "l":
        var tom4 = new Audio('sounds/tom4.mp3');
        tom4.play();
        break;

      default: console.log(buttonInnerHTML)

    }
  });

}
