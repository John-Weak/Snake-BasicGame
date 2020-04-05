let Snake1;


function setup() {
    createCanvas(400,400);
    Snake1 = new Snake(50);
}

function draw() {
    background(255,0,50);
    Snake1.displaySnake();
} 

