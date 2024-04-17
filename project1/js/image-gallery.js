//Beginning of js doc//
// JavaScript Document


// The element with an id value of "img1" is selected and assigned to the variable named img1.
let img1 = document.getElementById("img1");
// The element with an id value of "img2" is selected and assigned to the variable named img2.
let img2 = document.getElementById("img2");
// The element with an id value of "img3" is selected and assigned to the variable named img3.
let img3 = document.getElementById("img3");
// The element with an id value of "img4" is selected and assigned to the variable named img4.
let img4 = document.getElementById("img4");
// The element with an id value of "img5" is selected and assigned to the variable named img5.
let img5 = document.getElementById("img5");


// The p element with the id of "caption" is assigned to the variable named imageCaption.
let imageCaption = document.getElementById("caption");


// The img element with the id of largeImage is assigned to the variable named lrgImg.
let lrgImg = document.getElementById("largeImage");


// The function named changeImg is defined.
function changeImg(){
// Gets the "src" attribute of 'this' element and assigns it to the imgSrc variable.  
    var imgSrc = this.getAttribute("src");
// Gets the "alt" attribute of 'this' element and assigns it to the imgCaption variable.  
    var imgCaption = this.getAttribute("alt");
// Sets the "src" attribute of the img element with the id of "largeImage" to the value assigned to the imgSrc variable.
    lrgImg.setAttribute("src", imgSrc);
// Inserts the value assigned to the imgCaption variable between the tags of the element assigned to the imageCaption variable.
    imageCaption.innerHTML = imgCaption;
};


// The function named showCaption is defined.
function showCaption(){
// Gets the "alt" attribute of 'this' element and assigns it to the imgCaption variable.  
    var imgCaption = this.getAttribute("alt");
// Creates a new div element and assigns it to the variable named newDiv.
    var newDiv = document.createElement("div");
// Sets the "class" attribute of the div to a value of "newDiv".
    newDiv.setAttribute("class", "newDiv");
// Sets the inner text content of the div element assigned to the variable named newDiv to the value assigned to the imgCaption variable.
    newDiv.innerHTML = imgCaption;  
// Inserts the div element assigned to the newDiv variable after 'this' element.  
    this.after(newDiv);
};


// The function named hideCaption is defined.
function hideCaption(){
// Selects first element with the class of "newDiv" and assigns it to the newDiv variable.
    var newDiv = document.querySelector(".newDiv");
// Removes the element assigned to the variable named newDiv.
    newDiv.remove();
};


// The function named addBorder is defined.
function addBorder(){
// A for statement is defined. The code in the loop runs 5 times. i is set to the starting value of 1; the code will run as long as i is less than 6; i is increased by one after each iteration.    
    for (i = 1; i < 6; i++){
// An element is selected by its id. The value of i for the iteration is concatenated to the id name and assigned to the variable named currentImg.         
        var currentImg = document.getElementById("img" + i);
// The class attribute is set to the value of "thumb" for the element assigned to the currentImg variable.
        currentImg.setAttribute("class", "thumb");
    } 
// Sets the value of the class attribute for 'this' element to "active-image".    
    this.setAttribute("class", "active-image");
};


// A for statement is defined. The code in the loop runs 5 times. i is set to the starting value of 1; the code will run as long as i is less than 6; i is increased by one after each iteration. 
for (i = 1; i < 6; i++){
// An element is selected by its id. The value of i for the iteration is concatenated to the id name and assigned to the variable named currentImg.       
    var currentImg = document.getElementById("img" + i);
// A click event that runs the changeImg function is added to the element assigned to the currentImg variable.
    currentImg.addEventListener("click", changeImg);
// A click event that runs the addBorder function is added to the element assigned to the currentImg variable.    
    currentImg.addEventListener("click", addBorder);
// A mouseover event that runs the showCaption function is added to the element assigned to the currentImg variable.    
    currentImg.addEventListener("mouseover", showCaption);
// A mouseout event that runs the hideCaption function is added to the element assigned to the currentImg variable.
    currentImg.addEventListener("mouseout", hideCaption);
}




