// detecting button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML.toLowerCase();
    
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

    });
}

//detecting keyboard press

document.addEventListener("keypress", function (event) {

    makeSound(event.key);
    buttonAnimation(event.key);

});

function makeSound(key) {

    switch (key) {

        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        break;

        case "a":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case "s":
            var tom1 = new Audio("sounds/tom1.mp3");
            tom1.play();
        break;

        case "d":
            var tom2 = new Audio("sounds/tom2.mp3");
            tom2.play();
        break;

        case "j":
            var tom3 = new Audio("sounds/tom3.mp3");
            tom3.play();
        break;

        case "k":
            var tom4 = new Audio("sounds/tom4.mp3");
            tom4.play();
        break;

        case "l":
            var kick = new Audio("sounds/kick.mp3");
            kick.play();
        break;

    
        default : console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentkey){

    var activeButton = document.querySelector("." + currentkey);

    activeButton.classList.add("pressed");
    setTimeout (function() {
        activeButton.classList.remove("pressed");  
    }, 100);
}





