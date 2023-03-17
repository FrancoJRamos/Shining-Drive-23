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
let page="";
let fileFormat=""

    //console.log(document.childNodes[1].childNodes[3].childNodes[3].id);
    if(document.childNodes[1].childNodes[3].childNodes[3].id == "motion"){
        page="motion"
        fileFormat="gif"
    }else if(document.childNodes[1].childNodes[3].childNodes[3].id =="design"){
        page="design"
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
})

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
})

//update projectCount by which radio button is clicked
    //store radio button array
let projectButtons = document.querySelectorAll("input[name=project_select_form]");

for (let i=0; i<projectButtons.length; i++){
    //if a checkbox is checked, assign its value to projectCount and update the page
    projectButtons[i].addEventListener("change",function(){
        //console.log("radio button has been changed");
        if(projectButtons[i].checked){
            projectCount = Number(projectButtons[i].value)
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
        sectionButtons[j].innerHTML = "<img src='images/sd-logo-inverse-dark.svg' alt='Project Section "+jUpdate+"'>"
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
