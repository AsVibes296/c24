var box1,box2, box3, box4, box5
var ground
var pig1, pig2
var log1, log2, log3, log4
var bird
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var myWorld, myEngine
function setup() {
  createCanvas(1200,400);
  myEngine=Engine.create()
  myWorld=myEngine.world;
  ground=new Ground(600,height,1200,20)
 
box1=new Box(700,320,70,70)
box2=new Box(920,320,70,70)
pig1=new Pig(810,320,50,50)
log1=new Log(810,260,30,300,PI/2)
box3=new Box(700,240,70,70)
box4=new Box(920,240,70,70)
pig2=new Pig(810,210,50,50)
log2=new Log(810,180,30,300,PI/2)
box5=new Box(810,160,70,70)
log3=new Log(760,80,30,150,PI/7)
log4=new Log(870,80,30,150,-PI/7)
bird=new Bird(100,100,50,50)
}

function draw() {
  background(0);  
  Engine.update(myEngine)
  console.log(box1.body.angle)
  box2.display()
ground.display()
box1.display()
pig1.display()
log1.display()
box3.display()
box4.display()
pig2.display()
log2.display()
box5.display()
log3.display()
log4.display()
bird.display()




}