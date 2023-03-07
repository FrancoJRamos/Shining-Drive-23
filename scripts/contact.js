/*  Shining Drive JS

    Contact Page
    Goals:
        Toggle Visibility for divs
        form validation
    Author: Franco Ramos
    Date:   03/02/2023

    Filename: contact.js
 */

//Declare Variables/Grab Elements

let resume = document.getElementById("resume_panel");
let emailForm = document.getElementById("email_panel");
let more = document.getElementById("more_panel");

let panelButtons = document.getElementsByClassName("accordion");

//set all panels to a closed behavior on load
window.addEventListener("load", function(){
    //console.log("an anonymous function has been called on load");
    resume.style.display = "none";
    emailForm.style.display = "none";
    more.style.display = "none";
})

//Test if a panel is displayed and toggle its state between block and hidden

for (i=0; i<panelButtons.length; i++){
    //console.log("this is the "+i+"th iteration" );
    
    panelButtons[i].addEventListener("click", function(){
        //console.log(panelArray[1]);
        //console.log(this.nextElementSibling);

        //use an if else statement to toggle
        if(this.nextElementSibling.style.display == "none"){
            //console.log(this.childNodes);
            this.childNodes[1].style.transform = "rotate(0deg)";
            this.nextElementSibling.style.display = "block";
        }
        else{
            this.childNodes[1].style.transform = "rotate(180deg)";
            this.nextElementSibling.style.display = "none";
        }
    })
}
