function setup() {
  createCanvas(800,400);
  m=createSprite(400, 200, 50, 50);
  f=createSprite(600,200,50,50)
  u=createSprite(200,300,30,40)
  g=createSprite(200,100,20,60)
}

function draw() {
  background("blue");  
  m.x=mouseX
  m.y=mouseY
u.velocityY=-3
if(collision(u,g)){
  u.visible=false
  g.visible=false
}else{
  u.visible=true
  g.visible=true
}
  if(collision(m,f)){
    m.shapeColor="yellow"
    f.shapeColor="yellow"
  }else{
    m.shapeColor="white"
    f.shapeColor="white"
  }
  drawSprites();
}

