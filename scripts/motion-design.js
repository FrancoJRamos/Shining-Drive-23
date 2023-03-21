/*  Shining Drive JS

    Motion & Design Page
    Goals:
        go through 3 elements for one project
        switch between projects
        filter projects based on keywords
        update resources used for projects
        overlay on clicking on project for expanded view
    Author: Franco Ramos
    Date:   03/06/2023

    Filename: nav.js
 */    
//Need variable to store which project is being viewed
//& variable to store which section of the project is being viewed
let projectCount=1;
let sectionCount=1;

let sectionButtons = document.getElementsByClassName("project_section_select");
let sectionButtonDefault = "<img src='images/sd-logo-inverse-dark.svg' alt='Project Section "+sectionCount+"'>"

//onload call updateSection to change the sectionButton to on
window.addEventListener("load",updateSection);

//check if the page is on design or motion page
let pageCheck =document.getElementsByClassName("page_check");
//console.log(pageCheck[0]);
let page="";
let fileFormat="";

    //console.log(document.childNodes[1].childNodes[3].childNodes[3].id);
    if(pageCheck[0].id == "motion"){
        page="motion";
        fileFormat="gif";
    }else if(pageCheck[0].id =="design"){
        page="design";
        fileFormat="jpg";
    }
    //console.log("current page is: "+page);
    //check innerHTML of current project
    //console.log(document.getElementById("design_interactive").innerHTML);


//initalize imageDisplay object
let imageDisplay=document.getElementById(page+"_interactive");
//console.log(imageDisplay.innerHTML);
//project arrays
    //store classes array

    //store alt array


//declare function to update the project image/description
function Updateproject(){

    let html="<img ";
    //update classes
    //update src
    html+= "src='images/"+page+"/"+page+"-"+projectCount+"-"+sectionCount+"."+fileFormat+"'";
    //update alt

    //close string
    html+=">";

    //console.log("code going in: "+html);
    imageDisplay.innerHTML=html;
    //console.log("code coming out: "+imageDisplay.innerHTML);
}

//create a function that changes the image to reflect the value of storyCount
    //on arrow buttons right=increase sectionCount
    //left=decrease sectionCount
let leftArrow = document.getElementsByClassName("arrow_left");
let rightArrow = document.getElementsByClassName("arrow_right");

rightArrow[0].addEventListener("click", function(){
    //console.log("right arrow has been clicked");
    //if statement initalizing projectCount to 1 if it goes over 7
    if (projectCount<7){
        projectCount +=1;
    }
    else{
        projectCount=1;
    }
    sectionCount=1;
    updateSection();
});

leftArrow[0].addEventListener("click", function(){
    //console.log("left arrow has been clicked");
    //if statement initalizing projectCount to 7 if it goes under 1
    if (projectCount>1){
        projectCount -=1;
    }
    else{
        projectCount=7;
    }
    sectionCount=1;
    updateSection();
});

//update projectCount by which radio button is clicked
    //store radio button array
let projectButtons = document.querySelectorAll("input[name=project_select_form]");

for (let i=0; i<projectButtons.length; i++){
    //if a checkbox is checked, assign its value to projectCount and update the page
    projectButtons[i].addEventListener("change",function(){
        //console.log("radio button has been changed");
        if(projectButtons[i].checked){
            projectCount = Number(projectButtons[i].value);
            //initialize sectionCount back to 1
            sectionCount = 1;
            updateSection();
        }
    }) 
}

//change sectionCount by clicking on the inverse-logo buttons

function initializeSectionButtons(){
    for (let j=0; j<sectionButtons.length; j++){
        let jUpdate=j+1;
        sectionButtons[j].innerHTML = "<img src='images/sd-logo-inverse-dark.svg' alt='Project Section "+jUpdate+"'>";
        sectionButtons[j].style.opacity= "0.5";
    }
}

//updating section by clicking a section button
for (let j=0; j<sectionButtons.length; j++){
    sectionButtons[j].addEventListener("click",function(){
        //console.log(this.innerHTML);
        //console.log(j);
        initializeSectionButtons();
        sectionCount=j+1;
        updateSection();
    })
}

function updateSection(){
    //console.log("updateSection called");
    initializeSectionButtons();
    sectionButtons[sectionCount-1].innerHTML="<img src='images/sd-logo-inverse.svg' alt='Project Section "+sectionCount+"'>";
    sectionButtons[sectionCount-1].style.opacity= "1";
    Updateproject();
}

//Create Overlay by clicking on button over project image
let overlayButton = document.getElementsByClassName("project_overlay_button");
let overlayDiv = document.getElementById("project_overlay");

overlayDiv.style.display="none";

for(let i=0; i<overlayButton.length;i++){
    overlayButton[i].addEventListener("click",function(){
        //check if the overlay is hidden or not and execute script
            //default behavior: if it is hidden
        if (overlayDiv.style.display =="none"){
                //console.log("overdiv off is entered");
            //turn on the overlay div
            overlayDiv.style.display="block";
            //change the button into the cross/exit button
                //console.log(overlayButton[0].innerHTML);
            overlayButton[0].innerHTML ="<img src='images/sd-logo-inverse-cross.svg' alt='click for a smaller view of file'>";
            //change the img row & column style to take up the entire grid
                //grid changes based on device view
            //mobile view
            if(innerWidth<=750){

            }
            //tablet view
            else if(innerWidth>750 && innerWidth<=1280){

            }
            //desktop view
            else if(innerWidth>1280){
                
            }

        }else if(overlayDiv.style.display =="block"){
                //console.log("overdiv is on is entered");
            //turn off the overlay div
            overlayDiv.style.display="none";
            //change the button into the inverse logo
            overlayButton[0].innerHTML ="<img src='images/sd-logo-inverse.svg' alt='click for a larger view of file'>";
        };
        
        //console.log("overlayButton has been clicked");
        //console.log(overlayDiv);
        
        //inverse the width & height of the img style
        //change its location using the row & column
    });
}
