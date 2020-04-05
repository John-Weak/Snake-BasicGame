class Snake {
    constructor(size, x = 0, y = 0) {
        this.boxSize = size;
        this.body = [];
        this.setup(x, y);
    }

    setup(x, y) {
        let XY = {
            x: x,
            y: y
        };
        this.body.push(XY);
    }

    displaySnake() {
        fill(0, 23, 40);
        strokeWeight(4);
        for (let positionXY of this.body) {
            square(positionXY.x, positionXY.y, this.boxSize);
        }
    }

    foodEaten(foodX, foodY) {
        let pos = this.body[0];
        return (foodX === pos.x && foodY === pos.y)
    }

    moveSnake(eaten = false) {

        let snakeHead = this.body[0];
        let condition = false;

        if (keyIsDown(LEFT_ARROW)) {
            condition = true;
            let change = {
                x: Math.abs(snakeHead.x - this.boxSize),
                y: snakeHead.y
            }
            this.body.unshift(change);
        }
        else if (keyIsDown(RIGHT_ARROW)) {
            condition = true;
            let change = {
                x: snakeHead.x + this.boxSize,
                y: snakeHead.y
            }
            this.body.unshift(change);
        }
        else if (keyIsDown(UP_ARROW)) {
            condition = true;
            let change = {
                x: snakeHead.x,
                y: Math.abs(snakeHead.y - this.boxSize)
            }
            this.body.unshift(change);
        }
        else if (keyIsDown(DOWN_ARROW)) {
            condition = true;
            let change = {
                x: snakeHead.x,
                y: Math.abs(snakeHead.y + this.boxSize)
            }
            this.body.unshift(change);
        }

        if (!eaten && condition) {
            this.body.pop();
        }

    }

    ownHit() {
        let snakeHead = this.body[0];
        let bool = false;
        for (let i = 1; i < this.body.length; i++) {
            let snake = this.body[i];
            if (snake.x === snakeHead.x && snake.y === snakeHead.y) {
                bool = true;
                return true;
            }
        }
        return bool;
    }
}




