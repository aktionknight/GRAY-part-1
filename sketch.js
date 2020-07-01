var User1,User2,User_stable,User_right,User_left,User_jump;
var bg,bgImg


function preload(){

 bgImg = loadImage("images/bg.png")
  User_stable = loadAnimation("images/stable1.png","images/stable2.png")
  User_right = loadAnimation("images/frame1.png","images/frame2.png","images/frame3.png","images/frame4.png","images/frame5.png","images/frame6.png","images/frame7.png")
  User_jump = loadAnimation("images/jump1.png","images/jump1.png","images/jump2.png","images/jump3.png","images/jump4.png","images/jump5.png","images/jump6.png","images/jump7.png")
User_left = loadAnimation("images/Oframe1.png","images/Oframe2.png","images/Oframe3.png","images/Oframe4.png","images/Oframe5.png","images/Oframe7.png")
UserShootR = loadAnimation("images/shootR1.png","images/shootR2.png","images/shootR3.png")
UserShootL = loadAnimation("images/shootL1.png","images/shootL2.png","images/shootL3.png")
target = loadImage("images/target.png")
enemy_mov = loadAnimation("images/enemy1.png","images/enemy1.2.png","images/enemy2.png","images/enemy2.2.png")
enemy = loadImage("images/enemy1.png")
enemy_movL = loadAnimation("images/enemyL1.png","images/enemyL1.2.png","images/enemyL2.png","images/enemyL2.2.png")
}



function setup() {
  createCanvas(displayWidth,displayHeight);



 bg =  createSprite(displayWidth/2- 350,displayHeight/2 + 100  ,displayWidth/2,displayHeight/2);
 bg.addImage("bg",bgImg)

 start = createSprite(350,600,30,100)  
 start.visible = false;

ground = createSprite(displayWidth/2,800,displayWidth*2,30)
ground.visible = false;

player1 = createSprite(200,600,20,50)
player1.addAnimation("player1",User_stable)
player1.scale = 0.3
player1.velocityY = 9.8

aimleft = createSprite(player1.x + 300,player1.y,20,20)
aimleft.visible = false;
aimleft.addImage("aimleft",target)
aimleft.scale = 2

aimright = createSprite(player1.x - 300,player1.y,20,20)
aimright.visible = true;
aimright.addImage("aimright",target)
aimright.scale = 2



enemy1 = createSprite(1000,500,30,40)
enemy1.shapeColor = "yellow"
enemy1.addImage("enemy1",enemy)
enemy1.scale = 0.3;



}


function draw() {
  background("white");  
  drawSprites();

  if(enemy1.x > player1.x){

    enemy1.velocityX = -4;
    enemy1.addAnimation("enemy1",enemy_mov)
    
      }
    
      if(enemy1.x < player1.x){
    
        enemy1.velocityX = 4;
        enemy1.addAnimation("enemy1",enemy_movL)
          }
  
          if(enemy1.isTouching(player1)){
            enemy1.velocityX = 0
            enemy1.addAnimation("enemy1",enemy_mov)
          }

  aimright.position.x = player1.position.x + 300;
  aimleft.position.x = player1.position.x - 300

  aimright.position.y = player1.position.y
  aimleft.position.y = player1.position.y

  camera.position.x = player1.position.x
camera.position.y = player1.position.y - 100

if(keyWentDown(68))
{
player1.velocityX = 7
player1.addAnimation("player1",User_right) 
}

if(keyWentUp(68))
{
player1.velocityX = 0
player1.addAnimation("player1",User_stable) 
}



if(keyWentDown(65))
{
player1.velocityX = -7
player1.addAnimation("player1",User_left) 

}

if(keyWentUp(65))
{
player1.velocityX = 0
player1.addAnimation("player1",User_stable) 
}

if(keyDown(32)&& player1.y > 600)
{
player1.velocityY = -15
player1.addAnimation("player1",User_jump)
//player1.addAnimation("User_right") 

}




  if(keyWentDown(70 && 65) ){

    aimleft.visible = true;
    aimright.visible = false;
    
    }
    
    if(keyWentUp(70 && 65)){
    
      aimleft.visible = false;
      aimright.visible = true;
      }
    




player1.velocityY += 0.8

if(player1.isTouching(start)){
 
  enemy1.velocityY = 9
  enemy1.velocityX = -6
enemy1.addImage("enemy1",enemy)
enemy1.scale = 0.3;
  camera.position.x = 700

  if(frameCount === 70){
enemy1.velocityX = 0
enemy1.velocityY = 0
start.destroy();
  }


}













enemy1.collide(ground)
player1.collide(ground)
}

function mouseClicked(){

bulletR = createSprite(player1.position.x,player1.position.y - 10,20,10)
bulletR.velocityX = 40;
bulletR.lifetime = 100;
bulletR.shapeColor = "yellow"
player1.addAnimation("player1",UserShootL)

if(player1.velocityX === -7){

player1.addAnimation("player1",UserShootL)
bulletL = createSprite(player1.position.x,player1.position.y - 10,20,10)
bulletL.velocityX = -40;
bulletL.lifetime = 100;
bulletL.shapeColor = "yellow"
bulletR.visible = false;
player1.addAnimation("player1",UserShootR)
}

//if(keyWentUp(65)){
 // player1.addAnimation("player1",User_stable)
//}

}