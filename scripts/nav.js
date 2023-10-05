/*  Shining Drive JS

    Contact Page
    Goals:
        Toggle Visibility for divs
    Author: Franco Ramos
    Date:   03/06/2023

    Filename: nav.js
 */

//Declare Variables/Grab Elements

const navList = document.getElementById("drop_down_nav");
const overlay = document.getElementById("nav_overlay");

const navButtons = document.getElementsByClassName("nav_button");

//moved from motion-design.js line 27
let pageCheck =document.getElementsByClassName("page_check");

//function to set navList to hidden and navButtons to display
function navMobile(){
    navList.style.display = "none";
    navButtons[0].style.display = "block";
    navList.style.flexDirection="column";
    //console.log(navList.style.flexDirection);
}
//function to set navList to display and navButtons to hidden
function navDesktop(){
    navList.style.display = "flex";
    navButtons[0].style.display = "none";
    navList.style.flexDirection="row";
    //console.log(navList.style.flexDirection);

}
//on load call appropriate function based on screen size
window.addEventListener("load",function(){
    //call navMobile
    if(window.innerWidth<1279){
        navMobile();
        //console.log("mobile view load");
    }
    else if(window.innerWidth >=1280){
        navDesktop();
        //console.log("desktop view load");
    }
})
//use a resize eventlistener to call the navFunctions and determine the correct nav layout
window.addEventListener("resize",function(){
    //console.log("resize event");
    if (window.innerWidth<1279){
        navMobile();
        //console.log("mobile view change");
    }else{
        navDesktop();
        //console.log("desktop view change");
    }
})
/*
if(window.innerWidth<1279){
    //console.log("window is in tablet/mobile view");
    window.addEventListener("load", function navMobile(){
        //console.log("an anonymous function has been called on load");
        navList.style.display = "none";
    })

} 
*/
//Test if a panel is displayed and toggle its state between block and hidden
for (i=0; i<navButtons.length; i++){
    //console.log("this is the "+i+"th iteration" );
    
    navButtons[i].addEventListener("click", function(){
        //console.log(navButtons[0].innerHTML);
        //console.log(this.nextElementSibling);

        //if the nav list is hidden
        if(this.nextElementSibling.style.display == "none"){
            
                /*only works on design motion page for debug purposes            
                console.log(overlayButton[0].style);
                console.log(imageDisplay.style);
                console.log(sectionButtonsGroup[0].style);
                */
               console.log(pageCheck[0].id);
            
            //turn on the overlay element
            //console.log(overlay);
            overlay.style.display = "block";

            //change button innerHTML into the exit button
            navButtons[0].innerHTML = "<img src='images/sd-logo-inverse-cross.svg' alt='close navigation menu'>";

            //turn on the nav list element
            this.nextElementSibling.style.display = "block";

            //exception for design & motion page - reduce z-index when overlay is brought up
            if(pageCheck[0].id =="motion" || pageCheck[0].id == "design" || pageCheck[0].id == "game"){
                
                /*
                    Debug Messages
                    console.log("the "+page+" page has the nav menu opened");

                    console.log(overlayButton[0].style.zIndex);
                    console.log(imageDisplay.style.zIndex);
                    console.log(sectionButtonsGroup[0].style.zIndex);
                */

                overlayButton[0].style.zIndex="3";
                imageDisplay.style.zIndex="3";
                sectionButtonsGroup[0].style.zIndex="3";    
            }
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
            if(pageCheck[0].id == "motion" || pageCheck[0].id == "design" || pageCheck[0].id == "game"){
                overlayButton[0].style.zIndex="9";
                imageDisplay.style.zIndex="8"; 
                sectionButtonsGroup[0].style.zIndex="9";     
            }
        }
    })
}

/*
if(window.innerWidth >=1280){
    window.addEventListener("load", function navDesktop(){
        navButtons[0].style.display = "none";
    })
}
*/


//4.17.23
//updating email on git test
//:P