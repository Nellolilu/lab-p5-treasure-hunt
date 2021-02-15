class Treasure {
    constructor(col, row) {
        this.x = col;
        this.y = row;
        this.width = 100
        this.hight = 0.1
        
    }


    drawTreasure(){
        image(treasurePicture, this.x, this.y, this.width, this.height);
    }

    // setRandomPosition() {
    //     this.x = Math.floor(Math.random() * 10);
    //     this.y = Math.floor(Math.random() * 10);
    // }


    
}