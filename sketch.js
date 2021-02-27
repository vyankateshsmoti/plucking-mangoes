
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var treeObj, stoneObj, groundObject, launcherObject;
var mango1;
var world, boy;
var slingshot;

function preload() {
  boy = loadImage("images/boy.png");
}

function setup() {
  createCanvas(1300, 600);
  engine = Engine.create();
  world = engine.world;

  stoneObj = new stone(268, 439, 20);
  mango1 = new mango(1100, 100, 30);
  mango2 = new mango(1000, 100, 25);
  mango3 = new mango(945, 204, 30);
  mango4 = new mango(1096, 204, 30);
  mango5 = new mango(1210, 200, 25);

  treeObj = new tree(1050, 580);
  groundObject = new ground(width / 2, 600, width, 20);

  slingshot = new SlingShot(stoneObj.body, { x: 250, y: 420 });




  Engine.run(engine);

}

function draw() {

  
  background(230);
  Engine.update(engine);

  
  
  image(boy, 200, 340, 200, 300);


  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stoneObj.display();

  groundObject.display();
  slingshot.display();

  detectcollision(stoneObj, mango1);
  detectcollision(stoneObj, mango2);
  detectcollision(stoneObj, mango3);
  detectcollision(stoneObj, mango4);
  detectcollision(stoneObj, mango5);

  textSize(20);
  fill("black");
  text("D R A G   T H E   M O U S E   P O I N T E R   T O W A R D' S   T R E E",50,30);
}
function mouseDragged() {
  Matter.Body.setPosition(stoneObj.body, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  slingshot.fly();
}
function detectcollision(lstone, lmango) {
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if (distance <= lmango.r + lstone.r) {
    Matter.Body.setStatic(lmango.body, false);
  }
}
function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(stoneObj.body);
  }
}
