const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
}

function preload() {
  treasurePicture = loadImage("/assets/treasure.png");
  pictureVariable = loadImage("../assets/character-down.png");
  pictureVariableUp = loadImage("../assets/character-up.png");
  pictureVariableRight = loadImage("../assets/character-right.png");
  pictureVariableLeft = loadImage("../assets/character-left.png");
  pictureVariableDown = loadImage("../assets/character-down.png");


}

function keyPressed(){
  game.keyPressed();
}