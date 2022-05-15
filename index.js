var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var buttontext = this.innerHTML;
    makeSound(buttontext);
    buttonAnimation(this.innerHTML);
  });
}

// keypressed function for handling the key pressed by user
function keypressed(event) {
  var k = event.key;
  makeSound(k);
  buttonAnimation(event.key);
}

// switch case for making sound for the given key
function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      break;
  }
}

// function for button pressed animation
function buttonAnimation(key) {
  var key_pressed = document.querySelector("." + key);
  console.log(key_pressed);
  key_pressed.classList.add("pressed");
  setTimeout(function () {
    key_pressed.classList.remove("pressed");
  }, 100);
}
