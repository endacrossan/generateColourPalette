var mainH; // needed to pass Hue value between functions

function randomHue() {
// this function generates a random number between 0 and 360 to set the Hue value on the HSL colour model, the Lightness values have been spread from % to 97 % to provide variants of the main colour that has been generated
// the default saturation is 100% but this can be changed using the slider after the main colour is generated, see function changeSaturation() below
// could use a for loop for the below but just wanted to get this up and running
var randomH = Math.round(Math.random()*360);
console.log(randomH);

// change 1st div backgraound colour using ID
let newColour = 'hsl(' + randomH + ', 100%, 3%)';
var segId = document.getElementById('seg1');
segId.style.backgroundColor = newColour;

// 2nd div
newColour = 'hsl(' + randomH + ', 100%, 12%)';
segId = document.getElementById('seg2');
segId.style.backgroundColor = newColour;

// 3rd div
newColour = 'hsl(' + randomH + ', 100%, 21%)';
segId = document.getElementById('seg3');
segId.style.backgroundColor = newColour;

// 4th div
newColour = 'hsl(' + randomH + ', 100%, 30%)';
segId = document.getElementById('seg4');
segId.style.backgroundColor = newColour;

// 5th div 
newColour = 'hsl(' + randomH + ', 100%, 39%)';
segId = document.getElementById('seg5');
segId.style.backgroundColor = newColour;

// 6th div 
newColour = 'hsl(' + randomH + ', 100%, 50%)';
segId = document.getElementById('seg6');
segId.style.backgroundColor = newColour;
segId.innerHTML = newColour;

// 7th div 
newColour = 'hsl(' + randomH + ', 100%, 61%)';
segId = document.getElementById('seg7');
segId.style.backgroundColor = newColour;

// 8th div 
newColour = 'hsl(' + randomH + ', 100%, 70%)';
segId = document.getElementById('seg8');
segId.style.backgroundColor = newColour;

// 9th div 
newColour = 'hsl(' + randomH + ', 100%, 79%)';
segId = document.getElementById('seg9');
segId.style.backgroundColor = newColour;

// 10th div 
newColour = 'hsl(' + randomH + ', 100%, 88%)';
segId = document.getElementById('seg10');
segId.style.backgroundColor = newColour;

// 11th div 
newColour = 'hsl(' + randomH + ', 100%, 97%)';
segId = document.getElementById('seg11');
segId.style.backgroundColor = newColour;

mainH=randomH;
}



function changeSaturation(randomH, satVal) {
// this is used with the slider to change the saturation in the range of 20 to 100 using the HSL colour model on the page

// change 1st div backgraound colour using ID
let newColour = 'hsl(' + randomH + ', ' + satVal + '%, 3%)';
var segId = document.getElementById('seg1');
segId.style.backgroundColor = newColour;

// 2nd div
newColour = 'hsl(' + randomH + ', ' + satVal + '%, 12%)';
segId = document.getElementById('seg2');
segId.style.backgroundColor = newColour;

// 3rd div
newColour = 'hsl(' + randomH + ', ' + satVal + '%, 21%)';
segId = document.getElementById('seg3');
segId.style.backgroundColor = newColour;

// 4th div
newColour = 'hsl(' + randomH + ', ' + satVal + '%, 30%)';
segId = document.getElementById('seg4');
segId.style.backgroundColor = newColour;

// 5th div 
newColour = 'hsl(' + randomH + ', ' + satVal + '%, 39%)';
segId = document.getElementById('seg5');
segId.style.backgroundColor = newColour;

// 6th div 
newColour = 'hsl(' + randomH + ', ' + satVal + '%, 50%)';
segId = document.getElementById('seg6');
segId.style.backgroundColor = newColour;
segId.innerHTML = newColour;

// 7th div 
newColour = 'hsl(' + randomH + ', ' + satVal + '%, 61%)';
segId = document.getElementById('seg7');
segId.style.backgroundColor = newColour;

// 8th div 
newColour = 'hsl(' + randomH + ', ' + satVal + '%, 70%)';
segId = document.getElementById('seg8');
segId.style.backgroundColor = newColour;

// 9th div 
newColour = 'hsl(' + randomH + ', ' + satVal + '%, 79%)';
segId = document.getElementById('seg9');
segId.style.backgroundColor = newColour;

// 10th div 
newColour = 'hsl(' + randomH + ', ' + satVal + '%, 88%)';
segId = document.getElementById('seg10');
segId.style.backgroundColor = newColour;

// 11th div 
newColour = 'hsl(' + randomH + ', ' + satVal + '%, 97%)';
segId = document.getElementById('seg11');
segId.style.backgroundColor = newColour;

console.log(satVal);
}