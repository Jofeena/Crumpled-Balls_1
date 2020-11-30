const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Paper;
var Dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	Dustbin = new dustbin(200, 200, 10, 20);
	Paper = new paper (300, 100, 50, 50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbin.display();
  paper.display();

  drawSprites();
}



