'use strict';

// global variable

var allPictures = [];
var currentPictures = [];
var imgEl1 = document.getElementById('image1');
var imgEl2 = document.getElementById('image2');
var imgEl3 = document.getElementById('image3');
var sectionEl = document.getElementById('click-tracker-container');


var picture1Index = 0;
var picture2Index = 0;
var picture3Index = 0;

var totalClicks = 0;


function Picture (src, name, clicked) {
    this.url = src;
    this.name = name;
    this.clicked = 0;


    allPictures.push(this);
}

// sectionEl.addEventListener('click', sectionCallBack);


// Event Listeners

imgEl1.addEventListener('click', imageEl1CallBack);

function imageEl1CallBack() {
    allPictures[picture1Index].clicked++;
    totalClicks++;
    console.log('clicked on ', allPictures[picture1Index].url);
    checkTotalClicks();
    chooseNewPictures();
}

imgEl2.addEventListener('click', imageEl2CallBack);

function imageEl2CallBack() { 
    allPictures[picture2Index].clicked++;
    totalClicks++;
    console.log(allPictures[picture2Index]);
    checkTotalClicks();
    chooseNewPictures();
}

imgEl3.addEventListener('click', imageEl3Callback);

function imageEl3Callback() { 
    allPictures[picture3Index].clicked++;
    totalClicks++;
    console.log(allPictures[picture3Index]);
    checkTotalClicks();
    chooseNewPictures();
}
function renderResults(){
    for (var i in allPictures){
        var newLiEl = document.createElement('li')
        newLiEl.textContent = allPictures[i].name + ' clicked : ' + allPictures[i].clicked + ' Times';
        // resultUl.appendChild(newLiEl);
    }
}


// function sectionCallBack(event) {
//     checkTotalClicks();
    
//     if(event.target.id){
//         totalClicks++;
//         console.log(totalClicks, 'this is total clicks');
//         allPictures[event.target.id].clicked++;
        
//         chooseNewPictures();
//     } else {
//         alert('click on an image');
//     }
// }

function checkTotalClicks() {
    console.log(totalClicks);
    if(totalClicks === 25) {
        console.log('removed');
        renderResults();
        imgEl1.removeEventListener('click', imageEl1CallBack);
        imgEl2.removeEventListener('click', imageEl2CallBack);
        imgEl3.removeEventListener('click', imageEl3Callback);
    }
}


//New Pictures

function chooseNewPictures() {
    var previousPictures = [picture1Index, picture2Index, picture3Index];
    
    
    do{
        picture1Index = Math.floor(Math.random() * allPictures.length);
    } while (previousPictures.includes(picture1Index))
    previousPictures.push(picture1Index);
    
    do{
        picture2Index = Math.floor(Math.random() * allPictures.length);
    } while (previousPictures.includes(picture2Index));
    previousPictures.push(picture2Index);
    
    do{
        picture3Index = Math.floor(Math.random() * allPictures.length);
    } while (previousPictures.includes(picture3Index));
    previousPictures.push(picture3Index);
    
    imgEl1.src = allPictures[picture1Index].url;
    imgEl1.id = picture1Index; //sets the image id = to the reference of its corresponding object's position in the array of all images
    imgEl2.src = allPictures[picture2Index].url;
    imgEl2.id = picture2Index;
    imgEl3.src = allPictures[picture3Index].url;
    imgEl3.id = picture3Index;
}

new Picture('imgs/bag.jpg', 'r2-d2');
new Picture('imgs/banana.jpg', 'banana');
new Picture('imgs/bathroom.jpg', 'tp-ipad');
new Picture('imgs/boots.jpg', 'georgie-boots');
new Picture('imgs/breakfast.jpg', 'breakfast-oven');
new Picture('imgs/bubblegum.jpg', 'gum');
new Picture('imgs/chair.jpg', 'its-a-chair');
new Picture('imgs/cthulhu.jpg', 'lord-darkness');
new Picture('imgs/dog-duck.jpg', 'quackhuahua');
new Picture('imgs/dragon.jpg', 'dragon-meat');
new Picture('imgs/pen.jpg', 'modular-pens');
new Picture('imgs/pet-sweep.jpg', 'pet-mop');
new Picture('imgs/scissors.jpg', 'pizza-scissors');
new Picture('imgs/shark.jpg', 'shark-sleep');
new Picture('imgs/sweep.png', 'baby-sweep');
new Picture('imgs/tauntaun.jpg', 'luke-baby');
new Picture('imgs/unicorn.jpg', 'unicorn-meat');
new Picture('imgs/usb.gif', 'tentacle-p..or..t');
new Picture('imgs/water-can.jpg', 'water-jug');
new Picture('imgs/wine-glass.jpg', 'smart-alcoholic');

chooseNewPictures();