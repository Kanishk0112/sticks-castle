const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2
var box3,box4,box5,box6;
var box7,box8;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var Door,handle;
var roof1,roof2;
function setup(){
    var canvas = createCanvas(1400,500);
    engine = Engine.create();
    world = engine.world;
     box3= new Box(500,410,70,150);
    ground = new Ground(700,490,1400,10);
    box1= new Box(700,420,150,150);
    box5= new Box(580,380,90,230);
    box2= new Box(613,270,70,150);  
     box4 = new Box(700,245,105,200);
     box6= new Box(788,270,70,150);  
     box7= new Box(820,380,90,230);
     box8= new Box(900,410,70,150);
     block1=new Block(473,330,16,14);
     block2=new Block(500,330,16,14);
     block3=new Block(525,330,16,14);
     block4= new Block(644,340,40,14);
     block5= new Block(700,340,40,14);
     block6= new Block(757,340,40,14);
     block7=new Block(615,258,16,14);
     block8=new Block(595,258,16,14);
     block9=new Block(565,258,16,14);
     block10=new Block(545,258,16,14);
     block11=new Block(874,330,16,14);
     block12=new Block(900,330,16,14);
     block13=new Block(930,330,16,14);
     block14= new Block(660,140,30,14);
     block15= new Block(700,140,30,14);
     block16= new Block(740,140,30,14);
     block17=new Block(860,258,16,14);
     block18=new Block(840,258,16,14);
     block19=new Block(805,258,16,14);
     block20=new Block(785,258,16,14);
     Door= new door(700,437,50,100);
     handle= new Block(720,437,5,5);
     roof1=new Roof();
     roof2=new Roof();
}

function draw(){
    background(179, 242, 241);
    
    Engine.update(engine);
   
  
  box1.display();
  box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display()
box8.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
Door.display();
handle.display();
roof1.display();
roof2.display();
//triangle(500,700,600,800,700,700);
  ground.display();
}