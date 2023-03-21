/*  Shining Drive JS

    Contact Page
    Goals:
        Toggle Visibility for divs
    Author: Franco Ramos
    Date:   03/06/2023

    Filename: nav.js
 */

//Declare Variables/Grab Elements

let navList = document.getElementById("drop_down_nav");
let overlay = document.getElementById("nav_overlay")

let navButtons = document.getElementsByClassName("nav_button");


//set all panels to a closed behavior on load if on tablet or mobile

if(window.innerWidth<1279){
    //console.log("window is in tablet/mobile view");
    window.addEventListener("load", function(){
        //console.log("an anonymous function has been called on load");
        navList.style.display = "none";
    })
    
    //Test if a panel is displayed and toggle its state between block and hidden
    
    for (i=0; i<navButtons.length; i++){
        //console.log("this is the "+i+"th iteration" );
        
        navButtons[i].addEventListener("click", function(){
            //console.log(navButtons[0].innerHTML);
            //console.log(this.nextElementSibling);
    
            //if the nav list is hidden
            if(this.nextElementSibling.style.display == "none"){
                //turn on the overlay element
                //console.log(overlay);
                overlay.style.display = "block";

                //change button innerHTML into the exit button
                navButtons[0].innerHTML = "<img src='images/sd-logo-inverse-cross.svg' alt='close navigation menu'>";

                //turn on the nav list element
                this.nextElementSibling.style.display = "block";

                //exception for design & motion page - reduce z-index when overlay is brought up
                overlayButton[0].style.zIndex="3";
                imageDisplay.style.zIndex="3";
            }
            //or else the nav list is already visible
            else{
                //turn off the overlay element
                overlay.style.display = "none";

                //change button innerHTML into the exit button
                navButtons[0].innerHTML = "<img src='images/sd-logo.svg' alt='Navigation Menu'>";

                //turn off the nav list element
                this.nextElementSibling.style.display = "none";
                
                //exception for design & motion page - increase z-index when overlay is brought up
                overlayButton[0].style.zIndex="9";
                imageDisplay.style.zIndex="8";
            }
        })
    }
}

if(window.innerWidth >=1280){
    window.addEventListener("load", function(){
        navButtons[0].style.display = "none";
    })
}


//rename the anonymous functions to be called 
//use a resize eventlistener to call the anonymous funcitons and determine the correct nav layout
