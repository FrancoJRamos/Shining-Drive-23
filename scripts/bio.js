/*  Shining Drive JS

    Biography Page
    Goals:
        switch stories either with buttons ascending/descending by 1
            or by selecting any story from the available list
    Author: Franco Ramos
    Date:   03/09/2023

    Filename: bio.js
 */

//Initialize Variables
//arrow buttons
const leftArrow = document.getElementsByClassName("arrow_left");
const rightArrow = document.getElementsByClassName("arrow_right");

let imageDisplay = document.getElementById("bio_interactive");

let textDisplay = document.getElementById("bio_story");

let storyCount = 1;
let storyUpdate = 0;
let storyAlt = ["The beginning pt1: The Pressure","The beginning pt2: The Doubt", "The Middle pt 1: The Time", "The Middle pt 2: The Accident", "The End pt1: The Recovery", "The End pt2: The Pressure"]
//story arrays - needed to store text in the stories, store in a seperate script page to save space/readability
let storyButtons = document.querySelectorAll("input[name=story_select]");

//create a function that changes the image to reflect the value of storyCount
//console.log(imageDisplay.childNodes);
//console.log(storyButtons);
function imageUpdate(storyUpdate){
    imageDisplay.innerHTML = "<img src='images/bio/bio0"+storyUpdate+".png' alt='"+storyAlt[storyUpdate-1]+" image'>";
}

//on right arrow click, increase the story count by 1
//remember that the 'rightArrow' Variable is technically a collection of all elements with the same class name
//so the correct way to target that element on this page is as: 'rightArrow[0]'
rightArrow[0].addEventListener("click", function(){
    //console.log("right arrow has been clicked");
    //if statement initalizing storyCount to 1 if it goes over six
    if (storyCount<6){
        storyCount +=1;
    }
    else{
        storyCount=1;
    }
    //console.log(storyCount);
    imageUpdate(storyCount);
    textUpdate();
})

leftArrow[0].addEventListener("click", function(){
    //console.log("left arrow has been clicked");
    //if statement initalizing storyCount to 6 if it goes under 1
    if (storyCount>1){
        storyCount -=1;
    }
    else{
        storyCount=6;
    }
    //console.log(storyCount);
    imageUpdate(storyCount);
    textUpdate();
})

/* replace current logic with that of object.checked like in chapter 3 lab 1
for (i=0; i<storyButtons.length; i++){
    storyButtons[i].addEventListener("click",function(){
        console.log(this.prop);
        //storyCount = i+1;
        console.log(storyCount);
        imageUpdate(storyCount);
    })
}
*/

for (let i=0; i<storyButtons.length; i++){
    //if a checkbox is checked, assign its value to storyCount and update the page
    storyButtons[i].addEventListener("change",function(){
        //console.log("radio button has been changed");
        if(storyButtons[i].checked){
            storyCount = Number(storyButtons[i].value)
            //console.log(storyCount);
            imageUpdate(storyCount);
            textUpdate();
        }
    })
    
}

//update story titles
//console.log(textDisplay.childNodes);
//console.log(textDisplay.childNodes[1]);
//console.log(textDisplay.childNodes[1].innerHTML);

function textUpdate(){
    //replace the story title within the h3 element in textDisplay with its corresponding value in the storyAlt Array
    textDisplay.childNodes[1].innerHTML=storyAlt[storyCount-1];
    //console.log(textDisplay.childNodes[3].innerHTML);
    textDisplay.childNodes[3].innerHTML=storyArray[storyCount-1];
}
