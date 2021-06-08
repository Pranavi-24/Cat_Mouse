var bg,bgImg;
var cat, catImg1, catImg2, catImg3;
var mouse, mouseImg1, mouseImg2, mouseImg3;

function preload() {
    bgImg = loadImage ("garden.png");
    catImg1 = loadImage ("cat1.png");
    mouseImg1 = loadImage ("mouse1.png");
    catImg2 = loadAnimation ("cat2.png","cat3.png");
    mouseImg2 = loadAnimation ("mouse2.png","mouse3.png");
    catImg3 = loadImage ("cat4.png")
    mouseImg3 = loadImage ("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    bg = createSprite (1000,800);
    bg.addAnimation("background",bgImg);
    bg.scale =2;
    cat = createSprite (800,680,50,50);
    cat.addAnimation ("catSitiing",catImg1);
    cat.scale = 0.3;
    mouse = createSprite (100,700, 50,50);
    mouse.addAnimation ("mouseSitiing",mouseImg1);
    mouse.scale = 0.2;
}

function draw() {

    background("bg");
    if(cat.x-mouse.x < (cat.width-mouse.width)/2){
    mouse.addAnimation ("mouse",mouseImg3);
    mouse.changeAnimation("mouse");
    cat.addAnimation ("cat",catImg3);
    cat.changeAnimation("cat");
    cat.velocityX = 0;
    }
    drawSprites();
}


function keyPressed(){

  if (keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation ("mouseTeasing");
      mouse.frameDelay = 25;
      cat.addAnimation("catWalking",catImg2);
      cat.changeAnimation("catWalking");
      cat.velocityX = -5;
     
    
  }


}
