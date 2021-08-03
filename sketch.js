var spacecraft, spaceboiimageright, spaceboiimageleft, spaceboiimageforward
var russpacestation;
var iss, spacecraft;
var bg, issimg, scimg;
var hasDocked = false;

function preload(){
  bg= loadImage("images/spacebg.jpg");
  issimg = loadImage("images/iss.png");
  scimg = loadImage("images/spacecraft1.png");
  scimg1 = loadImage("images/spacecraft2.png");
  scimg2= loadImage("images/spacecraft3.png");
  scimg3= loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(1000, 900);
  spacecraft = createSprite(295,900);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.25;
  
  iss = createSprite(330,400);
  iss.addImage(issimg);
  iss.scale = 1.5;

  iss.debug = true

  iss.setCollider("rectangle", 0,0,60, 30)
}



function draw() {
  background(bg);  
  spacecraft.addImage(scimg);

  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
  }


  if(keyDown(LEFT_ARROW)){
    spacecraft.addImage(scimg3)
    spacecraft.velocityX -=1
  }
  if(keyDown(RIGHT_ARROW)){
    spacecraft.addImage(scimg2)
    spacecraft.velocityX +=1
  }
  if(keyDown(UP_ARROW)){
    spacecraft.addImage(scimg1)
    spacecraft.velocityY -=1
  }
  if(keyDown(DOWN_ARROW)){
    
    spacecraft.velocityY +=1
  }

  
  drawSprites();

  if(spacecraft.isTouching(iss)){
    textSize(40)
    fill(255)
    textAlign(CENTER)
    text("This is Transport 4, we have succesfully docked", 500, 100)
  }
}