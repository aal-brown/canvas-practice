let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c stands for context
// This returns a drawing context to the variable c
// Think of this as making a super object that gives us the ability to apply a ton of methods and functions to our canvas.
let context = canvas.getContext('2d');

let iterations = 0;
let xcoord = 0;
let ycoord = 0;
let items = 200;
let items2 = 20;

let itemHeight = 1;
let itemWidth = 1;

let sizeLimit = 40;

let delay = 20;



let generateItems = function(items) {
  for (let i = 0; i < items; i++) {
    xcoord = (Math.floor(Math.random() * window.innerWidth));
    ycoord = (Math.floor(Math.random() * window.innerHeight));
    context.fillRect(xcoord,ycoord,4,4);
  }
};

let genItemsRandSize = function(items) {
  for (let i = 0; i < items; i++) {
    xcoord = (Math.floor(Math.random() * window.innerWidth));
    ycoord = (Math.floor(Math.random() * window.innerHeight));
    itemHeight = (Math.floor(Math.random() * sizeLimit));
    itemWidth = (Math.floor(Math.random() * sizeLimit));
    context.strokeRect(xcoord,ycoord,itemWidth,itemHeight);
  }
};

//To slow down the animation, I could just make it so that the canas only changes what is displayed every x iterations or so.

let animate = function() {
  requestAnimationFrame(animate);
  if (!(iterations % delay)) { //This is used to "slow down" the animation
    //The clearing has to be done BEFORE the item generation, otherwise it won't work
    context.clearRect(0, 0, canvas.width, canvas.height);
    /* generateItems(items); */
    genItemsRandSize(items2);
  }
  iterations++;
};

animate();

/* while (iterations < 100) {

  generateItems(items)

  iterations++;
  canvas.clearRect(0, 0, canvas.width, canvas.height);
} */

