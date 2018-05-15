'use strict';

// global variable
var allPictures = [];
var currentPictures = [];
var previousPictures = [picture1Index, picture2Index, picture3Index];
var imgEl1 = document.getElementById('image1');
var imgEl2 = document.getElementById('image2');
var imgEl3 = document.getElementById('image3');
var sectionEl = document.getElementById('click-tracker-container');
var resultUl = document.getElementById('product-result-container');

var picture1Index = 0;
var picture2Index = 1;
var picture3Index = 2;

function Picture (src, name) {
    this.url = src;
    this.name = name;
    this.clicked = 0;
    allPictures.push(this);
}

previousPictures.push(picture1Index);
previousPictures.push(picture2Index);


function checkPrevious (index) {
    previousPictures.push(index);
    var newIndex = Math.floor(Math.random() * allPictures.length);
    while (newIndex in previousPictures || newIndex in currentPictures) {
        console.log("I'm here");
        newIndex = Math.floor(Math.random() * allPictures.length);
    }
    currentPictures.push(newIndex);
    return newIndex;
}
//while (cantBeThis.includes())?  To shorten the above? Or indexOf.

function chooseNewPictures() {
    picture1Index = checkPrevious(picture1Index);
    imgEl1.src = allPictures[picture1Index].url;

    picture2Index = checkPrevious(picture2Index);
    imgEl2.src = allPictures[picture2Index].url;

    picture3Index = checkPrevious(picture3Index);
    imgEl3.src = allPictures[picture1Index].url;
   
    previousPictures = currentPictures;
    currentPictures = [];
}

// Event Listeners

imgEl1.addEventListener('click', function() {
    allPictures[picture1Index].clicked++;
    console.log('clicked on ', allPictures[picture1Index].url);
    chooseNewPictures();
});

imgEl2.addEventListener('click', function() { 
    allPictures[picture2Index].clicked++;
    console.log(allPictures[picture2Index]);
    console.log("I am image 2!");
    chooseNewPictures();
})

imgEl3.addEventListener('click', function() { 
    allPictures[picture3Index].clicked++;
    console.log(allPictures[picture3Index]);
    console.log("I am image 3!");
    chooseNewPictures();
})

function renderResults(){
    for (var i in allPictures){
    var newLiEl = document.createElement('li')
    newLiEl.textContent = allPictures[i].name + ' clicked : ' + allPictures[i].clicked + ' Times';
    resultUl.appendChild(newLiEl);
    }
}

function checkTotalClicks() {
    if(totalClicks === 25) {
        renderResults();
        img1.removeEventListener('click', )
    }
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

