/*  Shining Drive JS

    Contact Page
    Goals:
        Toggle Visibility for divs
        form validation
        edit grid row template based on what div is visible
    Author: Franco Ramos
    Date:   03/02/2023

    Filename: contact.js
 */

//Declare Variables/Grab Elements

let resume = document.getElementById("resume_panel");
let emailForm = document.getElementById("email_panel");
let more = document.getElementById("more_panel");

let resumeTemplate = "4em";
let emailFormTemplate = "4em";
let moreTemplate = "4em";

let panelButtons = document.getElementsByClassName("accordion");

//set all panels to a closed behavior on load
window.addEventListener("load", function(){
    //console.log("an anonymous function has been called on load");
    resume.style.display = "none";
    emailForm.style.display = "none";
    more.style.display = "none";
    //console.log(this.document.getElementById("contact_grid"));
    this.document.getElementById("contact_grid").style.gridTemplateRows="8em "+ resumeTemplate+" "+emailFormTemplate+" "+moreTemplate;
})
function updateRowTemplate(gridTemplate){
    //console.log("update has been called");
    //this.parentNode.parentNode.style.grid-template-rows = "8em "+ resumeTemplate+" "+emailFormTemplate+" "+moreTemplate;
    gridTemplate.style.gridTemplateRows="8em "+ resumeTemplate+" "+emailFormTemplate+" "+moreTemplate;
    //console.log(gridTemplate);
}

//Test if a panel is displayed and toggle its state between block and hidden
for (i=0; i<panelButtons.length; i++){
    //console.log("this is the "+i+"th iteration" );
    
    panelButtons[i].addEventListener("click", function(){
        //console.log(panelArray[1]);
        //console.log(this.nextElementSibling);

        //use an if else statement to toggle
        //if the div is not visible
        if(this.nextElementSibling.style.display == "none"){
            //console.log(this.childNodes);
            this.childNodes[1].style.transform = "rotate(0deg)";
            this.nextElementSibling.style.display = "block";
            
            //edit the row template style using parent node
            //checking with the name of the panel
            //console.log(this);
            //console.log(this.id);
            if(this.id=="resume_button"){
                //console.log("resume clicked");
                resumeTemplate = "10em";
            }else if(this.id=="email_button"){
                emailFormTemplate = "15em";
            }else if(this.id=="more_button"){
                moreTemplate = "3fr";
            }
            //console.log("call update row");
            //console.log(this.parentNode.parentNode.style.gridTemplateRows);
            let sendTemplate = this.parentNode.parentNode;
            updateRowTemplate(sendTemplate);
        }
        //else the div is visible
        else{
            this.childNodes[1].style.transform = "rotate(180deg)";
            this.nextElementSibling.style.display = "none";
            //reset the row template to 1fr for the panel clicked
            if(this.id=="resume_button"){
                //console.log("resume clicked");
                resumeTemplate = "4em";
            }else if(this.id=="email_button"){
                emailFormTemplate = "4em";
            }else if(this.id=="more_button"){
                moreTemplate = "4em";
            }
            let sendTemplate = this.parentNode.parentNode;
            updateRowTemplate(sendTemplate);
        }
    })
}

//