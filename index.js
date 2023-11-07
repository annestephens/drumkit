var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {


    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //    console.log(this.style.color = 'white');
    // console.log("this was clicked >> " + this)
        var buttonInnerHTML = this.innerHTML;

        findKeyPressed(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        buttonHover(buttonInnerHTML);

    });

   
    
    addEventListener("keydown", function(event) {
         // var keyPressed = event.key;
        // this.alert(event.key + " key was pressed!");
        // console.log(event);
     
        findKeyPressed(event.key);
        buttonAnimation(event.key);
    });

    function findKeyPressed(key) {
            //   alert(event.key + " was pressed!");
            switch (key) {
                case "w":
                    var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    break;
                
                case "a":
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;
    
                case "s":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;
    
                case "d":
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;
                
                case "l":
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;
        
                case "j":
                    var crash = new Audio("sounds/crash.mp3");
                    crash.play();
                    break;
    
                case "k":
                    var kick = new Audio("sounds/kick-bass.mp3");
                    kick.play();
                    break;
                
                default: errorShow(event);
                // console.log(this);
                // alert("key not recognised!")
                    
                // findKeyPressed(KeyboardEvent);
                // console.log("this is loading in the click event listener!" + KeyboardEvent)
                }
    
            }

    };
    

    function buttonAnimation(currentKey) {
            var activeButton = document.querySelector("." + currentKey);

            if (activeButton) {
                setTimeout(function() {
                    activeButton.classList.remove("pressed");
                   }, 100);

                activeButton.classList.add("pressed");
            } else {
                console.log("key not found")
            }
    };

    function errorShow(event) {

        var errorShow = document.querySelector("h2");
        errorShow.classList.add("show");

        setTimeout(function() {
            errorShow.classList.remove("show");
           }, 10000);

    };




    // Me gone wild 👇 

       // var w = new Audio('sounds/tom-1.mp3');
    // var a = new Audio('sounds/tom/tom-2.mp3');
    // var s = new Audio('sounds/tom/tom-3.mp3');
    // var d = new Audio('sounds/tom/tom-4.mp3');
    // var j = new Audio('sounds/tom/crash.mp3');
    // var k = new Audio('sounds/tom/snare.mp3');
    // var l = new Audio('sounds/tom/kick-bass.mp3');

    //  document.querySelectorAll(".drum")[i].addEventListener("keypress", function() {
    //     if (button.innerText === 'w') {
    //         console.log(this);
    //         w.play();
    //     } else if (this.innerText === 'a') {
    //         a.play();
    //     } else if (this.innerHTML === 's') {
    //         s.play();
    //     } else if (this.innerHTML === 'd') {
    //         d.play();
    //     } else if (this.innerHTML === 'j') {
    //         j.play();
    //     } else if (this.innerHTML === 'k') {
    //         k.play();
    //     } else if (this.innerHTML === 'l') {
    //         l.play();
    //     } else {
    //         console.log(this);
    //     }



    // document.querySelectorAll(".w")[i].addEventListener("click", function() {
    //     console.log(this);
    //     w.play();
    // });


// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();


// Adding an event listener to a click


// alert("Javascript is linked!");
// document.querySelector(".drum").addEventListener("click", handleClick)

// function handleClick() {
//     alert("I just got clicked!")
// }

//Anonymous function
// document.querySelector("button").addEventListener("click", function)
//     alert("I just got clicked!")
// }


// var drumkit = document.querySelectorAll("button.drum");

// for (i of drumkit) {
//     i.addEventListener("click", function() {
//         alert("I just got clicked!");
//     });
// }
