const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig;
var log1;

var log2;
var box3;
var box2


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)
    log2 = new Log(600,300,200,PI/2)
    box1 = new Box(650,2,50,100);
    box2 = new Box(165,3,50,100);
    //pig = new Pig(150,2)  
    log1 = new Log(600,10,200,PI/2)
    
    

   // box3 = new Box(550,2,50,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
   
   
    ground.display();
    log2.display();
    box1.display();
    box2.display();
    pig.display();
    log1.display();
   
   
    box3.display();
}