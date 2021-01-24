
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;
//var constraintLog;
var bobDiameter; 

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobDiameter = 40;

	roof = new Roof(400,200,300,20);
	
	bob1 = new Bob(400-bobDiameter*2,350,40);
	bob2 = new Bob(400-bobDiameter,350,40);
	bob3 = new Bob(400,350,40);
	bob4 = new Bob(400+bobDiameter,350,40);
	bob5 = new Bob(400+bobDiameter*2,350,40);

	
	rope1 = new rope(bob1.body, roof.body, -bobDiameter*2,0);
	rope2 = new rope(bob2.body, roof.body, -bobDiameter*1,0);
	rope3 = new rope(bob3.body, roof.body, 0,0);
	rope4 = new rope(bob4.body, roof.body, bobDiameter*1,0);
	rope5 = new rope(bob5.body, roof.body, bobDiameter*2,0);

	//constraintLog = new Log(230,180,80,PI/2);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  //constraintLog.display();

  drawSprites();
 
}



