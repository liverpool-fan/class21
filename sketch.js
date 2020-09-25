var fixedRect, movingRect;
var go1,go2,go3
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
go1 = createSprite (100,100,50,50)
go2 = createSprite(300,100,50,50)
go2.velocityX = -4
go3 = createSprite(500,100,50,50)
go3.velocityX = -4
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

 bounceOff(go1,go2)
 bounceOff(go1,go3)
 bounceOff(fixedRect,movingRect)
 bounceOff(go2,go3)
  drawSprites();
}
