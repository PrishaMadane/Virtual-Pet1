var dog;
var dogimg,doghappy;
var database ;
var foodS,foodStock;

function preload()
{
  dogimg = loadImage('Dog.png');
  doghappy = loadImage('happydog.png');
}

function setup() {
  database= firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogimg);
  dog.scale = 0.19;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);
}


function draw() {  
  
  background(46,139,87);
 
 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(doghappy);
 }

 
 
 drawSprites();
  
  fill("white");
  stroke("black");
  strokeWeight(5);
  text('Food remaining : ' +foodS,170,150 );
  textSize(12);
  strokeWeight(0);
  fill("yellow");
  text("Note: Press UP_ARROW key To feed drago Milk",130,30);
  

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  } else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}





