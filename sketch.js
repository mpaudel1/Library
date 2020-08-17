var fixedRect, movingRect;
var newRect, oldRect;

function setup() {
  createCanvas(800,400);
  
  //fixedRect = createSprite(650, 100, 150, 50);
  //fixedRect.velocityX = -3;


  movingRect = createSprite(200, 100, 125, 25);
  movingRect.velocityY = 3;

  newRect = createSprite(200, 200, 50, 15);

  oldRect = createSprite(200, 300, 50, 15);
  oldRect.velocityY = -3;
}

function draw() {
  background(255,255,255);  

  newRect.x = mouseX;
  newRect.y = mouseY;

  if (isTouching(newRect, oldRect)) {
    oldRect.shapeColor = "blue";

  } else {
    oldRect.shapeColor = "red";
  }

  bounceOff(oldRect, movingRect);  

  drawSprites();
}
























