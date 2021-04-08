const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1
var box1, box2,box3,box4,box5
var ball1


function setup()
{
    createCanvas(1000, 800);
  engine = Engine.create();
  world = engine.world;

ground1 = new Ground(600,600,1200,20);

box1 = new Box(700,500,100,100);
box2 = new Box(700,400,100,100);
box3 = new Box(700,300,100,100);
box4 = new Box(700,200,100,100);
box5 = new Box(700,100,100,100);

ball1 = new Ball(500,100,90);
rope1 = new Connection(ball1.body,{x:200,y:20});

  

}

function draw()
{
    background("pink");
    Engine.update(engine);


    ground1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ball1.display();
    rope1.display();
}