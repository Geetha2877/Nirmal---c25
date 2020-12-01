const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var binImg,bin;

function preload(){
    binImg = loadImage("dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(400,380,800,20);
    crumpledPaper = new Paper(80,200);

   // bin = createSprite(964,520,20,20);
    //bin.addImage(binImg);
    //bin.scale = 0.45;

    binPart1 = new Dustbin(595,300,20,140); 
    binPart2 = new Dustbin(655,362,100,18);
    binPart3 = new Dustbin(715,300,20,140);
}
function draw(){
    background("grey");
    Engine.update(engine);

    
    ground.display();
    crumpledPaper.display();
    binPart1.display();
    binPart2.display();
    binPart3.display(); 
      
    
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:220,y:-300});
    }
}
