
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, tree, stone, boy, boy2, mango, mango2, mango3, mango4, mango5, mango6;

function preload(){
	boy = loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  boy2 = Bodies.rectangle(200,584, 80 ,150)
  World.add(world,boy2)
	ground = new Ground(400,700,800,10);
	tree = new Tree(650,500, 300, 500);
    stone = new Stone(204,622,28,30);
    mango = new Mangoes(700,450,50,50);
    mango2 = new Mangoes(650,400,50,50);
    mango3 = new Mangoes(600,380,50,50);
    mango4 = new Mangoes(700,300,50,50);
    mango5 = new Mangoes(740,400,50,50);
    mango6 = new Mangoes(550,420,50,50);


    chain = new Chain(stone.body,{x:210,y:595});
    World.add(world, chain);

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 background(255);
 boy2 = image(boy, 200,584, 80 ,150);
  stone.display(); 
 ground.display();
 tree.display();
 mango.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 detectcollision(stone, mango);
 detectcollision(stone, mango2);
 detectcollision(stone, mango3);
 detectcollision(stone, mango4);
 detectcollision(stone, mango5);
 detectcollision(stone, mango6);
 keyPressed();

  drawSprites();
fill(225); 
textSize(20);
text("Press Space To Try Again!", 450, 50);
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY})

}
function keyPressed(){
  if(keyDown("space")){
    chain.attach(stone.body)
  }
}

function mouseReleased(){
  chain.fly();
}


function detectcollision(object1,object2){
  if (object1.x - object2.x <= object2.width/2 + object1.width/2
  && object2.x - object1.x <= object2.width/2 + object1.width/2
  && object1.y - object2.y <= object2.height/2 + object1.height/2
  && object2.y - object1.y <= object2.height/2 + object1.height/2) {
   Matter.body.setStatic(object2.body, false)
  }
}

