class Snake {
    constructor(size, x = 0, y = 0) {
        this.boxSize = size;
        this.body = [];
        this.cont = 0;
        this.setup(x, y);
    }

    setup(x, y) {
        let XY = {
            x: x,
            y: y
        };
        this.body.push(XY);
    }

    basicStart() {
        if (keyIsPressed)
            this.ChangeDirection();
        this.displaySnake();
    }

    displaySnake() {
        fill(0, 100, 40);
        strokeWeight(4);
        for (let positionXY of this.body) {
            square(positionXY.x, positionXY.y, this.boxSize);
        }
    }

    foodEaten(foodX, foodY) {
        if (foodX === this.body[0].x && foodY === this.body[0].y) {
            console.log("added??");
            this.addTail();
            console.log("wtf");
            return true;
        }
        else {
            return false;
        }

    }

    ChangeDirection() {
        switch (keyCode) {
            case 38://for up
                if (this.cont != 4) {
                    this.up();
                    break;
                }
            case 40://for down
                if (this.cont != 3) {
                    this.down();
                    break;
                }
            case 37://for left
                if (this.cont != 2) {
                    this.left();
                    break;
                }
            case 39://for right
                if (this.cont != 1) {
                    this.right();
                    break;
                }
        }
    }



    left() {
        let snakeHead = this.body[0];
        let change = {
            x: Math.abs(snakeHead.x - this.boxSize),
            y: snakeHead.y
        }
        this.body.unshift(change);
        this.body.pop();
        this.cont = 1;
    }
    right() {
        let snakeHead = this.body[0];
        let change = {
            x: snakeHead.x + this.boxSize,
            y: snakeHead.y
        }
        this.body.unshift(change);
        this.body.pop();
        this.cont = 2;
    }
    up() {
        let snakeHead = this.body[0];
        let change = {
            x: snakeHead.x,
            y: Math.abs(snakeHead.y - this.boxSize)
        }
        this.body.unshift(change);
        this.body.pop();
        this.cont = 3;
    }
    down() {
        let snakeHead = this.body[0];
        let change = {
            x: snakeHead.x,
            y: Math.abs(snakeHead.y + this.boxSize)
        }
        this.body.unshift(change);
        this.body.pop();
        this.cont = 4;
    }


    ownHit() {
        let snakeHead = this.body[0];
        for (let i = 1; i < this.body.length; i++) {
            let snake = this.body[i];
            if (snake.x === snakeHead.x && snake.y === snakeHead.y) {
                return true;
            }
        }
    }

    addTail() {
        this.body.push(this.body[this.body.length - 1]);
    }
    /*     snakeTeleport() {
            var snakeHead = this.body[0];
            // if (snakeHead.x > windowWidth - this.boxSize || snakeHead.x<0 || snakeHead.y > windowHeight - this.boxSize || snakeHead.y < 0) {
            //     console.log("Game Over");
        
            if (snakeHead.x > wind)
        
        
        } */

}


