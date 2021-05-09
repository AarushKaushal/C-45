var bg, bgImg;
var bird, birdImg;
var invisibleground;
var score = 0;
var pipe1,pipe2;
var gameState=1;
function preload(){
  bgImg = loadImage("bg.png");
  birdImg = loadImage("bird.png");
}
function setup(){
  var canvas =createCanvas(1800,900);
  bg= createSprite(900,0,1800,900);
  bg.addImage(bgImg);
  bg.scale=4;
  bg.velocityX=-4;
  bird = new Bird(700,450,10,10);
  pipe1 = new Pipes(1800,700,40,500);
  pipe2 = new Pipes(1800,0,40,300);
}
function draw(){
  bird.display();
  if(gameState===1){
  score = score+1
  if(bg.x<0){
    bg.x=bg.width/2
  }
  if(keyDown("space")){
    bird.velocityY=-20;
  } 
 // bird.velocityY=bird.velocityY+2;
  drawSprites();
  noStroke();
  textSize(35)
  fill("black") 
  text("Score : " + score, width-300, 50)  

    pipe1.display();
    pipe2.display(); 
    pipe1.depth=bg.depth;
    pipe1.depth+=3;
    console.log("bg",bg.depth);
    console.log("pipe",pipe1.depth)
    if(bird.isTouching(pipe1) || bird.isTouching(pipe2)){
      gameState=0;
    }
  }
  else{
  }
}