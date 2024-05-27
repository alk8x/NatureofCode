// random number distribution
// ideally, the rectangles' heights would even out

// global variables
let randomCounts = []; // array to keep track of how often random numbers are picked
let total = 20; // total number of counts


function setup() {
  createCanvas(640, 240);
  for (let i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }
}

function draw() {
  background(255);
  let index = floor(random(randomCounts.length)); // pick random number
  randomCounts[index]++; // increase count

  stroke(0);
  fill(127);
  let w = width / randomCounts.length;
  for (let x = 0; x < randomCounts.length; x++) { //graph results
    rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]); // create rectangle and add height
  }

}