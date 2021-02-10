const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var C;
var B1,B1img

function preload(){
  bg=loadImage("Images/bg.jpg");
  B1img=loadImage("Images/bird.png")
}

function setup() {
  createCanvas(1600,755);
  engine = Engine.create();
  world = engine.world;
  C=new Cloud(200,height/2,10,10)
}

function draw() {
  background(bg); 
  C.display();
  BCloud();
  drawSprites();
}

function BCloud(){
  if (frameCount%100===0){
  B1=createSprite(1600,height/2,100,100)
  B1.addImage(B1img)
  B1.scale=0.07;
  B1.velocityX=-5
  }
}

function isTouching(){
  if (B1.x-C.x<B1.width/2+C.width/2 && C.x-B1.x<B1.width/2+C.width/2){
    B1.destroy();
  }
}