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

var allProductImagesContainerSectionEl = document.getElementById('all_product_Images');

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

function handleClickOnAnyImage(event){
  if(event.target.tagName !== 'IMG'){
    return;
  }
  console.log('clicked on A image');
  //increment total clicks
  likeCounter++;
  if(event.target.id === 'left_product_img'){
    leftImageThatIsOnThePage.clicks++;
  }
  if(event.target.id === 'center_product_img'){
    centerImageThatIsOnThePage.clicks++;
  }
  if(event.target.id === 'right_product_img'){
    rightImageThatIsOnThePage.clicks++;
  }

  var tempPickedProducts = [];
  //TODO: refactor to be repeatable
  do {// we are selecting a previous product
    // pick a new 3 images
    var leftImageIndex = Math.floor(Math.random() * allImages.length);

  } while (
    previouslyPickedImages.includes(allImages[leftImageIndex])||
    tempPickedProducts.includes(allImages[leftImageIndex])

  );
  tempPickedProducts.push(allImages[leftImageIndex]);
  do {// we are selecting a previous image
    // pick a new 3 images,
    var centerImageIndex = Math.floor(Math.random() * allImages.length);

  } while (
    previouslyPickedImages.includes(allImages[centerImageIndex]) ||
    tempPickedProducts.includes(allImages[centerImageIndex])

  );
  tempPickedProducts.push(allImages[centerImageIndex]);

  do {

    var rightImageIndex = Math.floor(Math.random() * allImages.length);

  } while (

    previouslyPickedImages.includes(allImages[rightImageIndex])||
    tempPickedProducts.includes(allImages[rightImageIndex])

  );
  tempPickedProducts.push(allImages[rightImageIndex]);

  //selecting 3 random images
  //TODO: make sure you dont repeat


  leftImageThatIsOnThePage = allImages[leftImageIndex];
  centerImageThatIsOnThePage = allImages[centerImageIndex];
  rightImageThatIsOnThePage = allImages[rightImageIndex];

  // and put them on the page
  leftImage.src = leftImageThatIsOnThePage.imagesrc;
  centerImage.src = centerImageThatIsOnThePage.imagesrc;
  rightImage.src = rightImageThatIsOnThePage.imagesrc;


  // stop after 2 clicks
  if(likeCounter > 24){
    // stop listening for clicks on the left, center and right images
    allProductImagesContainerSectionEl.removeEventListener('click', handleClickOnAnyImage);
    // centerDiv.removeEventListener('click', handleClickOnCenterImage);
    // rightDiv.removeEventListener('click', handleClickOnRightImage);

    makeAProductChart();
  }
}

allProductImagesContainerSectionEl.addEventListener('click', handleClickOnAnyImage);


new BusCatalogImage('./images/bag.jpg', 'Travel Bag');
new BusCatalogImage('./images/banana.jpg', 'Banana');
new BusCatalogImage('./images/bathroom.jpg', 'Bathroom');
new BusCatalogImage('./images/boots.jpg', 'Boots');
new BusCatalogImage('./images/breakfast.jpg', 'Breakfast');
new BusCatalogImage('./images/bubblegum.jpg', 'Bubbegum');
new BusCatalogImage('./images/chair.jpg', 'Chair');
new BusCatalogImage('./images/cthulhu.jpg', 'Cthulhu');
new BusCatalogImage('./images/dog-duck.jpg', 'Dog-Duck');
new BusCatalogImage('./images/dragon.jpg', 'Dragon');
new BusCatalogImage('./images/pen.jpg', 'Pen');
new BusCatalogImage('./images/scissors.jpg', 'Scissors');
new BusCatalogImage('./images/shark.jpg', 'Shark');
new BusCatalogImage('./images/sweep.png', 'Sweep');
new BusCatalogImage('./images/tauntaun.jpg', 'TaunTaun');
new BusCatalogImage('./images/unicorn.jpg', 'Unicorn');
new BusCatalogImage('./images/usb.gif', 'Usb');
new BusCatalogImage('./images/water-can.jpg', 'Water-Can');


leftImageThatIsOnThePage= allImages[2];
centerImageThatIsOnThePage=allImages[1];
rightImageThatIsOnThePage=allImages[0];

//================================================================
//chart added to show up the items
//================================================================


function makeAProductChart(){

  var productNamesArray = [];
  var productLikesArray =[];

  for(var i = 0; i < allImages.length; i++){
    var singleProductName = allImages[i].name;
    productNamesArray.push(singleProductName);
  }

  for(var j = 0; j < allImages.length; j++){
    var singleProductLikes = allImages[j].clicks;
    productLikesArray.push(singleProductLikes);
  }



  var ctx = document.getElementById('BusCatalogChart').getContext('2d');

  var productChart = new Chart(ctx, {
  // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: productNamesArray,
      datasets: [{
        label: 'Product Likes',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: productLikesArray
      }]
    },

    // Configuration options go here
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}












