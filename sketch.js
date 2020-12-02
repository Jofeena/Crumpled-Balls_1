const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Paper;
var Dustbin;
var paper_image;

function preload()
{
  	paper_image = loadImage ("sprites/paper.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	dustbin = new Dustbin(200, 200, 10, 20);
	paper = new Paper (300, 100, 50, 50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbin.display();
  paper.display();

  drawSprites();
}



