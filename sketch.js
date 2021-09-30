
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ball2;
var ground;
var stand;
var stand2;
var stand3;
var angle = 10;
var angle2 = 60;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01,
    //friction:0.5,
    //density:2
  }
   
  var ground_options ={
     isStatic: true
  };

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  stand = Bodies.rectangle(350,75,100,5,ground_options);
  World.add(world,stand);

  stand2 = Bodies.rectangle(200,200,100,5,ground_options);
  World.add(world,stand2);

  stand3 = Bodies.rectangle(50,275,100,5,ground_options);
  World.add(world,stand3);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(300,10,20,ball_options);
  World.add(world,ball2);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(stand.position.x,stand.position.y,100,5);

  Matter.Body.rotate(stand3,angle2);
  push();
  translate(stand3.position.x,stand3.position.y);
  rotate(angle2);
  rect(0,0,100,5);
  pop();
  angle2+=2;

  Matter.Body.rotate(stand2,angle);
  push();
  translate(stand2.position.x,stand2.position.y);
  rotate(angle);
  rect(0,0,100,5);
  pop();
  angle+=1;
}

