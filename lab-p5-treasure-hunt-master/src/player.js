class Player {
    constructor(col, row){
        this.x = col;
        this.y = row;
        this.width = SQUARE_SIDE;
        this.height = SQUARE_SIDE;
    }
    
    draw() {
        image(pictureVariable, this.x, this.y, this.width, this.height)
    }
  
    moveUp(){
        this.y -= SQUARE_SIDE;
        pictureVariable = pictureVariableUp
        if(this.y < 0){
            this.y = 0;
        }
    }
  
    moveLeft(){
        this.x -= SQUARE_SIDE;
        pictureVariable = pictureVariableLeft
        if(this.x < 0){
            this.x = 0;
        }
    }
  
    moveRight(){
        this.x += SQUARE_SIDE;
        pictureVariable = pictureVariableRight
        if(this.x + this.width > WIDTH){
            this.x = WIDTH - this.width;
        }
    }
  
    moveDown(){
        this.y += SQUARE_SIDE;
        pictureVariable = pictureVariableDown
        if(this.y + this.height > HEIGHT){
            this.y = HEIGHT - this.height;
        }
    }
  } 