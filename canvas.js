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
let items = 20;
const arr = [];
for (let i = 0; i < 100; i++) {
  arr.push([(window.innerWidth / 2), (window.innerHeight / 2), 1])
}
const arr2 = [];
for (let i = 0; i < 100; i++) {
  arr2.push([(window.innerWidth / 2), (window.innerHeight / 2), 1])
}

let itemHeight = 1;
let itemWidth = 1;

let sizeLimit = 40;

let delay = 20;
let foodx = [100, 200, 300, 400, 500, 600]
let foody = [100, 400, 700, 500, 200, 300]


let generateFood = function (foodx, foody) {
  for (let i = 0; i < foodx.length; i++) {
    xcoord = foodx[i]
    ycoord = foody[i]
    context.fillStyle = "red";
    context.fillRect(xcoord, ycoord, 10 * i, 10 * i);
  }
};


const genItemsRandSize = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i][0] = (arr[i][0] + ((-1) ** (Math.floor(Math.random() * 2))) * Math.random() * 30);
    arr[i][1] = (arr[i][1] + ((-1) ** (Math.floor(Math.random() * 2))) * Math.random() * 30);
    for (let k = 0; k < foodx.length; k++) {
      if (arr[i][0] <= (foodx[k] + 10*k) && arr[i][0] >= (foodx[k]) && arr[i][1] <= (foody[k] + 10*k) && arr[i][1] >= (foody[k])) {
        arr[i][2] += 1.5 * k
      }
    }
    //context.strokeRect(arr[i][0],arr[i][1], arr[i][2], arr[i][3]);
    context.beginPath();
    context.arc(arr[i][0], arr[i][1], arr[i][2], 0, 2 * Math.PI);
    context.fillStyle = "green";
    context.fill();
    context.strokeStyle = '#008000';
    context.stroke();
  }
};
const genItemsRandSize2 = function (arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr2[i][0] = (arr2[i][0] + ((-1) ** (Math.floor(Math.random() * 2))) *
      Math.random() * 30);
    arr2[i][1] = (arr2[i][1] + ((-1) ** (Math.floor(Math.random() * 2))) *
      Math.random() * 30);
    for (let k = 0; k < foodx.length; k++) {
      if (arr2[i][0] <= (foodx[k] + 10*k) && arr2[i][0] >= (foodx[k]) && arr2[i][1] <= (foody[k] + 10*k) && arr2[i][1] >= (foody[k])) {
        arr2[i][2] += 1.5 * k
      }
    }
    //context.strokeRect(arr2[i][0],arr2[i][1], arr2[i][2], arr2[i][3]);
    context.beginPath();
    context.arc(arr2[i][0], arr2[i][1], arr2[i][2], 0, 2 * Math.PI);
    context.fillStyle = "blue";
    context.fill();
    context.strokeStyle = '#0000FF';
    context.stroke();
  }
};
//To slow down the animation, I could just make it so that the canas only changes what is displayed every x iterations or so.

let animate = function () {
  requestAnimationFrame(animate);
  if (!(iterations % delay)) { //This is used to "slow down" the animation
    //The clearing has to be done BEFORE the item generation, otherwise it won't work
    context.clearRect(0, 0, canvas.width, canvas.height);
    /* generateItems(items); */
    genItemsRandSize(arr);
    genItemsRandSize2(arr2);
    generateFood(foodx, foody)
    console.log(context.getImageData(101, 201, 2, 2).data[0])
  }
  iterations++;
};

animate();

/* while (iterations < 100) {

  generateItems(items)

  iterations++;
  canvas.clearRect(0, 0, canvas.width, canvas.height);
} */