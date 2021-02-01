const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box,Box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


    box = new Box(200,300,50,50)
    Box1=new Box(240,100,50,100);

    ground1 = new Ground(200,250,70,80);

}

function draw(){
    background(0);
    Engine.update(engine);


    box.display();
    Box1.display();
    ground1.display();

    
}