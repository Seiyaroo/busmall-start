'use strict';

// global variable
var Product = {
    clicksComplete: false,
    totalClicks: 0,
    pictureNames: [],
    myPictures: []
}

var allPictures = [];
var currentPictures = [];
var myPictures = [];
var voteTotal = []; // array to push the amount of votes into for chart
var pictureNames = []; //self-explanatory for picture names
var clicksComplete = false;

var imgEl1 = document.getElementById('image1'); // Left Image
var imgEl2 = document.getElementById('image2'); // Center Image
var imgEl3 = document.getElementById('image3'); // Right Image

var sectionEl = document.getElementById('click-tracker-container');

var picture1Index = 0;
var picture2Index = 0;
var picture3Index = 0;

var totalClicks = 0;
var myChart;

function Picture (src, name, clicked) {
    this.url = src;
    this.name = name;
    this.clicked = 0;
    
    
    allPictures.push(this);
}

// Event Listener

imgEl1.addEventListener('click', () => vote(allPictures, picture1Index));

imgEl2.addEventListener('click', () => vote(allPictures, picture2Index));

imgEl3.addEventListener('click', () => vote(allPictures, picture3Index));



function vote(pictures, index) {
    if (clicksComplete === false) {
        pictures[index].clicked++;
        totalClicks++;
    }

    if (totalClicks < 5) {
        checkTotalClicks();
        chooseNewPictures();
    
    } else {
        clicksComplete = true;
        updateChartArrays();
        drawChart();
    }
}



function renderResults(){
    for (var i in allPictures){
        var newLiEl = document.createElement('li')
        newLiEl.textContent = allPictures[i].name + ' clicked : ' + allPictures[i].clicked + ' Times';
    }
}


function checkTotalClicks() {
    // console.log(totalClicks);
    if(totalClicks === 25) {
        console.log('removed');
        renderResults();
        imgEl1.removeEventListener('click', imageEl1CallBack);
        imgEl2.removeEventListener('click', imageEl2CallBack);
        imgEl3.removeEventListener('click', imageEl3Callback);
        windDown();
    }
}

function onPageLoad() {
    if (localStorage.array) {
        allPictures = JSON.parse(localStorage.getItem('array'));
    } else {
        initialize();
    }
}

function windDown() {
    localStorage.setItem(JSON.stringify('array', allPictures));
    clicksComplete = false;
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
function initialize() {
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
}

function updateChartArrays() {
    for (var i = 0; i < allPictures.length; i++) {
        pictureNames[i] = allPictures[i].name;
        voteTotal[i] = allPictures[i].clicked;
    }
}

var data = {
    labels: pictureNames, // titles array we declared earlier
    datasets: [{
        data: voteTotal, // votes array we declared earlier
        backgroundColor: [
            'bisque',
            'darkgray',
            'burlywood',
            'lightblue',
            'navy'
        ],
        hoverBackgroundColor: [
            'blue',
            'blue',
            'blue',
            'blue',
            'blue'
        ]
    }]
};

function drawChart() { 
    var ctx = document.getElementById('busmall-chart').getContext('2d');
    myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: { 
            responsive: true,
            animation: {
              duration: 100,
              easing: 'easeOutBounce'
            }
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero:true
                    }
                }
            ] 
        }
    });
}

onPageLoad();