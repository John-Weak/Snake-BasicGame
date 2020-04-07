let Snake1;
let Food1;
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(15);
    let relativeSize=Math.floor(windowHeight/20);
    Snake1 = new Snake(relativeSize);
    Food1 = new Food(relativeSize);
}

function draw() {
    background(255, 0, 50);
    Food1.displayFood();
    Snake1.basicStart();
    if (Snake1.foodEaten(Food1.x, Food1.y))
        Food1.randomSpawn(Snake1.body);
}


