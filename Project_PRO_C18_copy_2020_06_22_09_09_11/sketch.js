var monkey,ground,banana,stone;
var monkey_running,banana_moving,stone_moving,ground_moving;



var score;


function preload(){
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png");

 stone_moving=loadImage("stone.png");  
  ground_moving = loadImage("jungle.jpg");
  
 banana_moving = loadImage("Banana.png");
  
 
}

function setup() {
  createCanvas(400, 400);
  
 monkey=createSprite(80,340);
  monkey.addAnimation("running",monkey_running);
  
  
  ground = createSprite(200,180,400,20);
  ground.addImage("moving",ground_moving);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  stone=createSprite(280,340,40,10);
 stone.addImage("moving",stone_moving);
  stone.scale=0.3;
  score = 0;
  
  banana=createSprite(300,50,30,20);
  banana.addImage("moving",banana_moving);
  banana.scale=0.1;
}

function draw() {
  background(180);
  
  score = score + Math.round(getFrameRate()/60);
  text("Score: "+ score, 500,50);
  
 
  
  
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  spawnBanana();
  
  drawSprites();
}

function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
     banana=createSprite(300,50,30,20);
  banana.addImage("moving",banana_moving);
  banana.scale=0.1;
    banana.velocityY=10;
     }
   }
 
   