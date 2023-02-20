let ground;
let lander;
var lander_img;
var bg_img;


var vx = 0;
var g = 0.05;
var vy = 0;

var playerLeft
var playerRight
var playerUp
function preload()
{
  lander_img = loadAnimation("normal.png")
  bg_img = loadImage("bg.png")
  playerLeft = loadAnimation ("left_thruster_1.png","left_thruster_2.png")
  playerRight = loadAnimation ("right_thruster_1.png","right_thruster_2.png")
  playerUp = loadAnimation ("b_thrust_1.png","b_thrust_2.png","b_thrust_3.png")
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);
//criar sprite lander e add imagem e scale
  lander = createSprite(60,70)
  lander.addAnimation("normal",lander_img)
  lander.addAnimation ("left",playerLeft)
  lander.addAnimation ("right",playerRight)
  lander.addAnimation ("Up",playerUp)
  lander.scale = 0.1
  ground = createSprite(500,680,1000,40)


  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  //colocar texto na tela para velocidade vertical
  text(" velocidade vertical: " + round(vy),800,75)
  text(" velocidade horizontal: " + round(vx),800,50) 
  vy=vy+g
  lander.y += vy
  lander.x += vx
  pop();

  //configurar a descida da nave em y + gravidade
  
  drawSprites();
}

function keyPressed(){
  if(keyCode == UP_ARROW){
vy= -1
lander.changeAnimation("Up")
  }
  if(keyCode == LEFT_ARROW){
    vx= -1
    lander.changeAnimation("right")
      }
      if(keyCode == RIGHT_ARROW){
        vx= +1
        lander.changeAnimation("left")
          }
}
function keyReleased(){
  if(keyCode == UP_ARROW){
    vy= -1
    lander.changeAnimation("normal")
      }
      if(keyCode == LEFT_ARROW){
        vx= -1
        lander.changeAnimation("normal")
          }
          if(keyCode == RIGHT_ARROW){
            vx= +1
            lander.changeAnimation("normal")
              }
}


