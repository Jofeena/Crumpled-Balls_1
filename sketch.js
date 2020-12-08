const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin;


function preload()
{
  var Bin = loadImage (dustbin.png/sprites);
  var paperCrush = loadImage (paper.png/sprites);
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	dustbin = new Dustbin(200, 200, 10, 20);
	paper = new Paper (300, 100, 50, 50);

	Engine.run(engine);
  
}


function keyPresseed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,papreObject.body.position,{x:85,y:-85});
	}
}

function draw() {
  rectMode(CENTER);
  background(0);

  dustbin.display();
  paper.display();

  drawSprites();
}



