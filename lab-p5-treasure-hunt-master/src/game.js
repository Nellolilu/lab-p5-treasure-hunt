class Game {
  constructor() {
    this.player = new Player(0, 0);
    this.treasure = new Treasure(400,400);

  }

  drawGrid() {
    background("lightyellow");
    for(let i = 0; i<=10; i++){
      line(0, SQUARE_SIDE * i, WIDTH, SQUARE_SIDE * i);
      line(SQUARE_SIDE * i, 0, SQUARE_SIDE * i, HEIGHT);
      this.player.draw();
      this.treasure.drawTreasure();

      if (this.collisionCheck(this.player, this.treasure)) {
        // this.treasure.setRandomPosition();
        console.log("HIT!");
      }
    }
  }

  keyPressed(){
    if (keyCode === 38){
        this.player.moveUp();
    }
    if (keyCode === 40){
        this.player.moveDown();
    }
    if (keyCode === 37){
        this.player.moveLeft();
    }
    if (keyCode === 39){
        this.player.moveRight();
    }
}


collisionCheck(player, treasure) {
  const playerTopArea = player.y;
  const playerLeftArea = player.x;
  const playerRightArea = player.x + player.width;
  const playerBottomArea = player.y + player.height;

  const obsTopArea = treasure.y;
  const obsLeftArea = treasure.x;
  const obsRightArea = treasure.x + treasure.width;
  const obsBottomArea = treasure.y + treasure.height;

  const isTouchingOnLeft = obsRightArea > playerLeftArea;
  const isTouchingOnBottom = obsTopArea < playerBottomArea;
  const isTouchingOnRight = obsLeftArea < playerRightArea;
  const isTouchingOnTop = obsBottomArea > playerTopArea;

  return (isTouchingOnBottom && isTouchingOnLeft && isTouchingOnRight && isTouchingOnTop);
}




}

