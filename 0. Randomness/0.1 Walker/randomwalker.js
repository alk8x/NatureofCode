// Randomly moving walker 

// global variables
let walker;

// executed once when the sketch starts
function setup() { 
    createCanvas(640, 240); // canvas size
    walker = new Walker(); // create walker
    background(255); // background color
}

// loops forever
function draw() {
    walker.step();
    walker.show();
}

// what it means to be a walker
class Walker { 
    constructor() { // acts as setup()
        // starting point in center
        this.x = width/2;
        this.y = height/2;
    }

    show() { // draw the object as a black dot
        stroke(0); // black
        point(this.x, this.y);
    }   

    step() {
        // move left, right, up, or down
        // let choice = floor(random(4)); // 0, 1, 2, or 3 since floor removes decimals
        // if (choice === 0) {
        //     this.x++;
        // } else if (choice === 1) {
        //     this.x--;
        // } else if (choice === 2) {
        //     this.y++;
        // } else {
        //     this.y--;
        // }

        // move diagonally or still
        let xstep = random(-1, 1); // any floating point to make varied length
        let ystep = random(-1, 1);

        this.x += xstep;
        this.y += ystep;
    }
}