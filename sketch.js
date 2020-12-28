
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var dustbin;
var ground;

function setup() {
  createCanvas(1260, 400);
  engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(600,height,1320,20);
	dustbin1 = new Dustbin(910,330,10,120);
  dustbin2 = new Dustbin(955,385,80,10);
	dustbin3 = new Dustbin(1000,330,10,120);	

  var paperObject_options ={
    isStatic:false,
    restitution : 0.3,
    density:1.2,
    friction:0.5  
}
this.body = Bodies.circle(200,370,10,paperObject_options);

World.add(world,this.body);
}

function draw() {
  rectMode(CENTER);
  background(255,0,0);
  Engine.update(engine)
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();

  
  
  ellipse(this.body.position.x,this.body.position.y,15,15); 
  ellipseMode(RADIUS); 
  
  drawSprites();
}

function keyPressed(){

  if (keyCode === UP_ARROW) {
    
    Matter.Body.applyForce(this.body,this.body.position,{x:10,y:-10});

  }
}

