

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var divisionheight=300;

var ground,ground2,ground3,ground4;
var particles;

var division=[];




function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;



    
ground = new Ground(10,70,25,800)
ground2 = new Ground(10,480,800,20)
ground3 = new Ground(400,70,25,800)
ground4 = new Ground(10,0,800,25)
particles= new Particles(20,70,50)

}

function draw(){
 background("black")
  Engine.update(engine)




  for(var k=0; k<=width; k=k+80){
    divisions.push(new Divisions(k,height-divisionheight/2,10,divisionheight));
    
    
    }
  
  

  
ground.display()
ground2.display()
ground3.display()
ground4.display()
particles.display()
}