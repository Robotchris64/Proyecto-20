var path,boy,cash,diamonds,jewelry,sword;
var pathImg,boyImg,cashImg,diamondsImg,jewelryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jewelryG,swordGroup;
var gameState= "play";
var gameOver,gameOverImg;



function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jewelryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  gameOverImg = loadImage("gameOver.png")
  
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);

path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;



boy = createSprite(width=70,height=580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
gameOver = createSprite(200,250,300,45);
gameOver.addImage(gameOverImg);
gameOver.scale=0.8;
gameOver.visible = false;
  
cashG=new Group();
diamondsG=new Group();
jewelryG=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState === "play"){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  

  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createjewelry();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(jewelryG.isTouching(boy)) {
      jewelryG.destroyEach();

  
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState="end";
        
    
        
     
    }
    
    drawSprites();
  textSize(20);
  fill(255);
  text("Tesoro: "+ treasureCollection,10,30);
  }

}
if(gameState==="end"){
  console.log("Has perdido");
  gameOver.visible = true;
  cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jewelryG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
}

    }
function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(height,40, 10, 10);
  cash.x = Math.round(random(50,width=350))
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 360;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50,width=350),height,40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 360;
  diamondsG.add(diamonds);
}
}

function createjewelry() {
  if (World.frameCount % 410 == 0) {
  var jewelry = createSprite(Math.round(random(50, width=350),height,40, 10, 10));
  jewelry.addImage(jewelryImg);
  jewelry.scale=0.13;
  jewelry.velocityY = 3;
  jewelry.lifetime = 360;
  jewelryG.add(jewelry);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, width=350),height,40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 360;
  swordGroup.add(sword);
  }
}
