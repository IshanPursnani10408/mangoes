
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,stoneObj;
var world,boy;
var mangoBodyPosition,stoneBodyPosition;

function preload(){
  boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(970,240,35);
	mango2=new mango(1000,90,35);
	mango3=new mango(1100,100,35);
	mango4=new mango(900,160,35);
	mango5=new mango(1200,140,35);
	mango6=new mango(1100,200,35);
	mango7=new mango(1000,160,35);
	mango8=new mango(1200,200,35);
	stoneObj=new stone(160,340,30,30);
  stoneObj.scale=1;
	treeObj=new tree(1050,580);
  groundObject=new ground(width/2,600,width,20); 
  
  launcherObject = new launcher(stoneObj.body,{x:240,y:420})

	Engine.run(engine);

}

function draw() {

  background(230);
Engine.update(engine)
textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);

  

  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
 
  groundObject.display();
  launcherObject.display();
  stoneObj.display();
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
}
  
function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }
  
  function detectollision(lstone,lmango){

    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position
    
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
      if(distance<=lmango.r+lstone.r)
      {
        Matter.Body.setStatic(lmango.body,false);
      }
    }