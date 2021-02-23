var cat,cImage;
var mouse,mImage;
var garden,gImage


function preload() {
 mImage=loadImage("mouse1.png");
 cImage=loadImage("cat1.png");
 gImage=loadImage("garden.png");
}

function setup(){
 createCanvas(1000,800);
  cat=createSprite(500,400,50,40);
  cat.addImage(cImage);

  mouse=createSprite(200,200,20,20);
  mouse.addImage(mImage);

  garden=createSprite(0,0,1000,800);
  garden.addImage(gImage);
}

function draw() {
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
