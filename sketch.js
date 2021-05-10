const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//declaring variables
var bobObject1, bobObject2, bobObject3, bobObject4;
var roof;
var rope1, rope2, rope3, rope4;

function setup() {
	createCanvas(800, 700);

    engine = Engine.create();
	world = engine.world;
  bobDiameter = 30;
  startBobposx = width/2;
  startBobposy = height/4+500;

	//create the bobs
	bobObject1 = new Bob(startBobposx+bobDiameter,startBobposy, bobDiameter);
  bobObject2 = new Bob(startBobposx,startBobposy, bobDiameter);
  bobObject3 = new Bob(startBobposx-bobDiameter,startBobposy, bobDiameter);
  
   
   //create the roof
     roof = new Roof(400,350,160,30);

     //create the ropes to attach the bob to the roof
    rope1 = new Rope(bobObject1.body, roof.body, 50, 50 );
    rope2 = new Rope(bobObject2.body, roof.body, 0, 0);
    rope3 = new Rope(bobObject3.body, roof.body, -bobDiameter*1, 0);

	Engine.run(engine);
}


function draw() {
  background(0);
  
  //display the bobs
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();

//display the roof
  roof.display();

//display the ropes
rope1.display();
rope2.display();
rope3.display();
}



