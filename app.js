'use strict';
//select three images from the image directory
//display them side by side
//counter of clicks on displayed images
//where are the images stored= variable with path to image

// Tracks favorite goat click counts
/*
counter for number of clicks
where are the images stored= variable with path to image
//ie: var img = './image/bag.jpg , banana.jpg, bathroom.jpg
  XX array of 10 images ['bag.jpg', 'banana.jpg', 'bathroom.jpg']
  XX array of clicks [1, 2, 0]
  Constructor function for images
  Refactored to: array of image objects
    - [{image}, {image}]
    - image object:
    {image_url: 'bag.jpg',
    clicks: 0,
    name: 'bag.jpg'
  }
-listen for an event('click')
  while(votes < 10)
  randomly select an image (three images)
    -random number generator- to pick the image
    - change the DOM
  - increment the amount of clicks on the clicked image
    - Store the index of the last image we put on the page
Stretch: start with random image
*/


// Javascript global variables
var likeCounter = 0;
var allImages = [];
var leftImageThatIsOnThePage;
var centerImageThatIsOnThePage;
var rightImageThatIsOnThePage;
var previouslyPickedImages=[];

// references to the DOM (html) document object model
var leftImage = document.getElementById('left-image');
var centerImage = document.getElementById('center-image');
var rightImage = document.getElementById('right-image');

//Intialize the page

var all_ProductImagesContainerSectionEl = document.getElementById('all_product_Images');

// var leftDiv = document.getElementById('left-div');
// console.log(leftDiv);
// var centerDiv = document.getElementById('center-div');
// console.log(centerDiv);
// var rightDiv = document.getElementById('right-div');
// console.log(rightDiv);

//declarting the constructors
var BusCatalogImage = function(src, name){
  this.imagesrc = src;
  this.name = name;
  this.clicks = 0;

  allImages.push(this);
};

//=============================================================
// Other functions
//=================================================================
//    randomly select an image(three images)
//    - random number generator - to pick the goat
//    - change the DOM
//    - Store the index of the last image we put on the page

function handleClickOnLeftImage(event){
  console.log('clicked on left image');
  //increment total clicks
  likeCounter++;
  // increment left Image clicks
  leftImageThatIsOnThePage.clicks++;

  //selecting 3 random images
  //TODO: make sure you dont repeat
  var leftImageIndex = Math.floor(Math.random() * allImages.length);
  var centerImageIndex = Math.floor( Math.random() * allImages.length );
  var rightImageIndex = Math.floor(Math.random() * allImages.length);
  // pick a new 3 images,

  leftImageThatIsOnThePage = allImages[leftImageIndex];
  centerImageThatIsOnThePage = allImages[centerImageIndex];
  rightImageThatIsOnThePage = allImages[rightImageIndex];

  // and put them on the page
  leftImage.src = leftImageThatIsOnThePage.imagesrc;
  centerImage.src = centerImageThatIsOnThePage.imagesrc;
  rightImage.src = rightImageThatIsOnThePage.imagesrc;


  // stop after 2 clicks
  if(likeCounter > 5){
    // stop listening for clicks on the left, center and right images
    leftDiv.removeEventListener('click', handleClickOnLeftImage);
    centerDiv.removeEventListener('click', handleClickOnCenterImage);
    rightDiv.removeEventListener('click', handleClickOnRightImage);

  }
}

function handleClickOnCenterImage(event) {
  console.log('clicked on center image');
  //increment total clicks
  likeCounter++;
  // increment center image clicks
  centerImageThatIsOnThePage.clicks++;

  // // pick a new 3 images,
  var leftImageIndex = Math.floor(Math.random() * allImages.length);
  var centerImageIndex = Math.floor(Math.random() * allImages.length);
  var rightImageIndex = Math.floor(Math.random() * allImages.length);

  leftImageThatIsOnThePage = allImages[leftImageIndex];
  centerImageThatIsOnThePage = allImages[centerImageIndex];
  rightImageThatIsOnThePage = allImages[rightImageIndex];

  //and put them on the page

  leftImage.src = leftImageThatIsOnThePage.imagesrc;
  centerImage.src = centerImageThatIsOnThePage.imagesrc;
  rightImage.src = rightImageThatIsOnThePage.imagesrc;

  // stop after 2 clicks
  if (likeCounter > 5) {
    // stop listening for clicks on the left,center and right images
    leftDiv.removeEventListener('click', handleClickOnLeftImage);
    centerDiv.removeEventListener('click', handleClickOnCenterImage);
    rightDiv.removeEventListener('click', handleClickOnRightImage);
  }
}

function handleClickOnRightImage(event) {
  console.log('clicked on right image');
  //increment total clicks

  likeCounter++;
  // increment right goat's clicks
  rightImageThatIsOnThePage.clicks++;

  var leftImageIndex = Math.floor(Math.random() * allImages.length);
  var centerImageIndex = Math.floor( Math.random() * allImages.length );
  var rightImageIndex = Math.floor(Math.random() * allImages.length);

  leftImageThatIsOnThePage = allImages[leftImageIndex];
  centerImageThatIsOnThePage = allImages[centerImageIndex];
  rightImageThatIsOnThePage = allImages[rightImageIndex];

  //and put them on the page
  leftImage.src = leftImageThatIsOnThePage.imagesrc;
  centerImage.src = centerImageThatIsOnThePage.imagesrc;
  rightImage.src = rightImageThatIsOnThePage.imagesrc;

  if (likeCounter > 5) {
    // stop listening for clicks on the left,center and right images
    leftDiv.removeEventListener('click', handleClickOnLeftImage);
    centerDiv.removeEventListener('click', handleClickOnCenterImage);
    rightDiv.removeEventListener('click', handleClickOnRightImage);

  }
}


leftDiv.addEventListener('click', handleClickOnLeftImage);
centerDiv.addEventListener('click', handleClickOnCenterImage);
rightDiv.addEventListener('click', handleClickOnRightImage);

new BusCatalogImage('./images/bag.jpg', 'Travel Bag');
new BusCatalogImage('./images/banana.jpg', 'Banana');
new BusCatalogImage('./images/bathroom.jpg', 'Bathroom');
new BusCatalogImage('./images/boots.jpg', 'Boots');
new BusCatalogImage('./images/breakfast.jpg', 'Breakfast');
new BusCatalogImage('./images/bubblegum.jpg', 'Bubbegum');
// new BusCatalogImage('./images/chair.jpg', 'Chair');
// new BusCatalogImage('./images/cthulhu.jpg', 'Cthulhu');
// new BusCatalogImage('./images/dog-duck.jpg', 'Dog-Duck');
// new BusCatalogImage('./images/dragon.jpg', 'Dragon');
// new BusCatalogImage('./images/pen.jpg', 'Pen');
// new BusCatalogImage('./images/scissors.jpg', 'Scissors');
// new BusCatalogImage('./images/shark.jpg', 'Shark');
// new BusCatalogImage('./images/sweep.png', 'Sweep');
// new BusCatalogImage('./images/tauntaun.jpg', 'TaunTaun');
// new BusCatalogImage('./images/unicorn.jpg', 'Unicorn');
// new BusCatalogImage('./images/usb.gif', 'Usb');
// new BusCatalogImage('./images/water-can.jpg', 'Water-Can');


leftImageThatIsOnThePage= allImages[2];
centerImageThatIsOnThePage=allImages[1];
rightImageThatIsOnThePage=allImages[0];

//================================================================
//chart added to show up the items
//================================================================



var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Travel Bag', 'Banana', 'Bathroom', 'Boots', 'Breakfast', 'Bubblegum'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    animation: {
      duration: 10000,
      easing: 'easeInQuad'
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});










