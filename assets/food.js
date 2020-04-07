class Food {
    constructor(size = 50) {
        this.size = size;
        this.maxrandomX = (windowWidth - this.size) / this.size;
        this.maxrandomY = (windowHeight - this.size) / this.size;
        this.x = Math.floor(this.maxrandomX / 2) * this.size;   //to place the food in middle
        this.y = Math.floor(this.maxrandomY / 2) * this.size;

    }

    randomSpawn(snakebodyies) {
        let x = Math.floor(random(0, this.maxrandomX)) * this.size;
        let y = Math.floor(random(0, this.maxrandomY)) * this.size;
        let condition = true;
        for (let snakebody of snakebodyies) {
            if (snakebody.x === x && snakebody.y === y) {
                condition = false;
                break;
            }
        }
        if (condition) {
            this.x = x;
            this.y = y;
        }
        else {
            this.randomFoodSpawn(snakebodyies);
        }
    }

    displayFood() {
        fill(45, 254, 78);
        square(this.x, this.y, this.size);
    }

}