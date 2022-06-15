var backgroundImage;
var a1,a1Image;

function preload(){
  backgroundImage= loadImage("images/spaceship dark.png");
  a1Image= loadImage("images/a1.png");
}

function setup(){
  createCanvas(600,600);
  

  a1= createSprite(100,100,50,50);
  a1.addImage("a1",a1Image);
}

function draw(){
  background(backgroundImage);

  drawSprites();

}


