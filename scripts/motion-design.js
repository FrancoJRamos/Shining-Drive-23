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
let sectionButtonsGroup = document.getElementsByClassName("project_section");
let sectionButtonDefault = "<img src='images/sd-logo-inverse-dark.svg' alt='Project Section "+sectionCount+"'>"

//onload call updateSection to update the sectionButton[0] to on
//all section buttons are set to off by default
window.addEventListener("load",updateSection);
window.addEventListener("load", tagInitialize);

//check if the page is on design or motion page
//moved to nav.js line 20
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


//initialize projectDescription object
let projectDescription=document.getElementById(page+"_description");
    //console.log(projectDescription.childNodes[1].innerHTML);
//initalize imageDisplay object
let imageDisplay=document.getElementById(page+"_interactive");
    //console.log(imageDisplay.innerHTML);

//initialize variables for table data to be edited later
    //switch between motion and design by concatenating strings
let tableYear = document.getElementById("project_table_"+page+"_year");
let tableTools = document.getElementById("project_table_"+page+"_tools");
let tableTags = document.getElementById("project_table_"+page+"_tags");
let tableBrief = document.getElementById("project_table_"+page+"_brief");

//declare function to update the project image/description
function Updateproject(){

    //change project title
    UpdateTitle();
    //change project description
    UpdateDescription();
    //change project image
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

//By updating the section you should update the image and the icon of the project
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

function gridResetMobile(){
    imageDisplay.style.gridRow="2/span 1";
    imageDisplay.style.gridColumn="2/span 1";
    imageDisplay.style.height="10em";
    imageDisplay.style.width="17em";

    overlayButton[0].style.gridColumn="2/span 1";
    overlayButton[0].style.gridRow="2/span 1";

    sectionButtonsGroup[0].style.gridRow="3/span 1";
    sectionButtonsGroup[0].style.gridColumn="2/span 1";
    sectionButtonsGroup[0].style.justifySelf="center";
    sectionButtonsGroup[0].style.background = "";
    sectionButtonsGroup[0].style.border = "";
    sectionButtonsGroup[0].style.height="";
}

function gridResetTablet(){
    imageDisplay.style.gridRow="2/span 1";
    imageDisplay.style.gridColumn="2/span 1";
    imageDisplay.style.height="12em";
    imageDisplay.style.width="21em";

    overlayButton[0].style.gridColumn="2/span 1"

    sectionButtonsGroup[0].style.gridRow="3/span 1";
    sectionButtonsGroup[0].style.gridColumn="2/span 1";
    sectionButtonsGroup[0].style.alignSelf="center";
    sectionButtonsGroup[0].style.background = "";
    sectionButtonsGroup[0].style.border = "";
}

function gridResetDesktop(){
    imageDisplay.style.gridRow="2/span 1";
    imageDisplay.style.gridColumn="3/span 1";
    imageDisplay.style.height="14em";
    imageDisplay.style.width="25em";

    overlayButton[0].style.gridColumn="3/span 1"
    overlayButton[0].style.justifySelf="end";

    sectionButtonsGroup[0].style.gridRow="3/span 1";
    sectionButtonsGroup[0].style.gridColumn="3/span 1";
    sectionButtonsGroup[0].style.alignSelf="center";
    sectionButtonsGroup[0].style.background = "";
    sectionButtonsGroup[0].style.border = "";
}

//Additional exceptions for z-index values on overlayButton, imageDisplay, and sectionButtonsGroup found in nav.js starting @ line 90

function gridOverlayMobile(){
    imageDisplay.style.gridRow="2/span 2";
    imageDisplay.style.gridColumn="1/span 3";
    imageDisplay.style.height="13em";
    imageDisplay.style.width="22em";

    overlayButton[0].style.gridColumn="3/span 1";
    overlayButton[0].style.gridRow="4/span 1";

    sectionButtonsGroup[0].style.gridColumn="1/span 3";
    sectionButtonsGroup[0].style.gridRow="4/span 1";
    sectionButtonsGroup[0].style.justifySelf="start";
    sectionButtonsGroup[0].style.background = "#294294";
    sectionButtonsGroup[0].style.border = "3px solid #fac739";
    sectionButtonsGroup[0].style.height="3em";

}

function gridOverlayTablet(){
    imageDisplay.style.gridRow="2/span 3";
    imageDisplay.style.gridColumn="1/span 4";
    imageDisplay.style.height="23em";
    imageDisplay.style.width="40em";

    overlayButton[0].style.gridColumn="4/span 1";

    sectionButtonsGroup[0].style.gridRow="5/span 1";
    sectionButtonsGroup[0].style.gridColumn="1/span 4";
    sectionButtonsGroup[0].style.alignSelf="start";
    sectionButtonsGroup[0].style.background = "#294294";
    sectionButtonsGroup[0].style.border = "3px solid #fac739";

}

function gridOverlayDesktop(){
    imageDisplay.style.gridRow="2/span 3";
    imageDisplay.style.gridColumn="1/span 6";
    imageDisplay.style.height="37em";
    imageDisplay.style.width="66em";

    overlayButton[0].style.gridColumn="6/span 1"
    overlayButton[0].style.justifySelf="start";

    sectionButtonsGroup[0].style.gridRow="6/span 1";
    sectionButtonsGroup[0].style.gridColumn="1/span 6";
    sectionButtonsGroup[0].style.alignSelf="end";
    sectionButtonsGroup[0].style.background = "#294294";
    sectionButtonsGroup[0].style.border = "3px solid #fac739";
    
}

for(let i=0; i<overlayButton.length;i++){
    overlayButton[i].addEventListener("click",function(){
        //check if the overlay is hidden or not and execute script
            //default behavior: if it is hidden
        if (overlayDiv.style.display =="none"){
            //set navButton z-index lower than project overlay
            navButtons[0].style.zIndex="3";
            //set imageDisplay zIndex to 8
            imageDisplay.style.zIndex="8";
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
                //increase size
                gridOverlayMobile();
                //move the interactive button out of the way
                //move section buttons into view
                
            }
            //tablet view
            else if(innerWidth>750 && innerWidth<1280){
                //increase size
                gridOverlayTablet();
                //move interactive button out of the way
                //move section buttons into view

            }
            //desktop view
            else if(innerWidth>=1280){
                //increase size
                gridOverlayDesktop();
                //move interactive button out of the way
                //move section buttons into view

            }

        }else if(overlayDiv.style.display =="block"){
            //set navButton z-index higher than project overlay
            navButtons[0].style.zIndex="8";
            //set imageDisplay zIndex to 0
            imageDisplay.style.zIndex="0";
                //console.log("overdiv is on is entered");
            //turn off the overlay div
            overlayDiv.style.display="none";
            //change the button into the inverse logo
            overlayButton[0].innerHTML ="<img src='images/sd-logo-inverse.svg' alt='click for a larger view of file'>";
            //revert the img row & column style
                //grid changes based on device view
            //mobile view
            if(innerWidth<=750){
                //decrease size
                gridResetMobile();
                //reset button position

            }
            //tablet view
            else if(innerWidth>750 && innerWidth<1280){
                //decrease size
                gridResetTablet();
                //reset button position

            }
            //desktop view
            else if(innerWidth>=1280){
                //decrease size
                gridResetDesktop();
                //reset button position

            }
        };
        
        //console.log("overlayButton has been clicked");
        //console.log(overlayDiv);
        
        //inverse the width & height of the img style
        //change its location using the row & column
    });
}

//reset imageDisplay grid styles on a resize event

window.addEventListener("resize",function(){
    //console.log("resize event");
    if (window.innerWidth<=750){
        gridResetMobile();
    }else if(innerWidth>750 && innerWidth<1280){
        gridResetTablet();
    }else if(innerWidth>=1280){
        gridResetDesktop();
    }
})

//function to update the project title
function UpdateTitle(){
    //console.log(projectCount);

    //if statement to change between design and motion arrays
    if (page == "design"){
        projectDescription.childNodes[1].innerHTML = designTitles[projectCount-1];
    }else if(page == "motion"){
        projectDescription.childNodes[1].innerHTML = motionTitles[projectCount-1];
    }
    //console.log(projectDescription.childNodes[1].innerHTML);
}

//function to update project descriptions
function UpdateDescription(){
    console.log(projectCount);

    //if state to change between design and motion arrays
    if(page == "design"){
        tableYear.innerHTML = designYears[projectCount-1];
        tableTools.innerHTML = designTools[projectCount-1];
        tableTags.innerHTML = designTags[projectCount-1];
        tableBrief.innerHTML = designBriefs[projectCount-1];
    }else if(page == "motion"){
        tableYear.innerHTML = motionYears[projectCount-1];
        tableTools.innerHTML = motionTools[projectCount-1];
        tableTags.innerHTML = motionTags[projectCount-1];
        tableBrief.innerHTML = motionBriefs[projectCount-1];
    }

    /*
        console.log("current table data is: ");
        console.log(tableYear.innerHTML);
        console.log(tableTools.innerHTML);
        console.log(tableTags.innerHTML);
        console.log(tableBrief.innerHTML);
    */
}

//function to filter project selection by clicking on a tag button
    //to use the includes() method along with a for loop
    //if tableTags[i].includes(tagsbutton.innerHTML) is true then set project to visible
let tagButtons=document.getElementsByClassName("tag_button");

//first initalize tags so that only those that show up in the project appear visible on the page
function tagInitialize(){
    for (let j=0; j<tagButtons.length; j++){

        tagButtons[j].style.display="none";

        //if between design & motion to use correct arrays
        if(pageCheck[0].id=="design"){

            /*
            console.log(tagButtons[j].value);
            console.log(designTags[j]);
            */

            for(let k=0; k<designTags.length; k++){
                if(designTags[k].includes(tagButtons[j].value)){
                    console.log("tag button value: "+tagButtons[j].value+" is found in array element: "+designTags[k]);
                    tagButtons[j].style.display="block";
                }
            }
            
        }else if(pageCheck[0].id=="motion"){

            for(let k=0; k<motionTags.length; k++){
                if(motionTags[k].includes(tagButtons[j].value)){
                    console.log("tag button value: "+tagButtons[j].value+" is found in array element: "+motionTags[k]);
                    tagButtons[j].style.display="block";
                }
            }
        }


    }

}
