let Snake1;
let Food1;
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(20);
    Snake1 = new Snake(50);
    Food1 = new Food(50);
}
let boolFood = false;
function draw() {
    background(255, 0, 50);
    Food1.displayFood();
    Snake1.moveSnake(boolFood);
    if (Snake1.foodEaten(Food1.x, Food1.y)) {
        Food1.randomFoodSpawn(Snake1.body);
        boolFood = true;
    }
    else {
        boolFood = false;
    }
    Snake1.displaySnake(boolFood);
    Snake1.ownHit();
}


