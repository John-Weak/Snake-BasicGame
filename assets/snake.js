class Snake {
    constructor(size, x = 0, y = 0) {
        this.boxSize = size;
        this.x = x;
        this.y = y;
        this.body = [];
        this.setup();
    }

    setup() {
        let XY={
            x:this.x,
            y:this.y
        };
        this.body.push(XY);
    }

    displaySnake(){
        fill(111,4,65);
        for(let positionXY of this.body){
            square(this.x,this.y,this.boxSize);
        }

    }


}




