
function setup() {
  createCanvas(300,300);
  edges=createEdgeSprites()
}

function draw() 
{
  
  
if (keyDown(LEFT_ARROW)){
  background ("yellow");
}
if (keyDown(RIGHT_ARROW)){
background("red");

}
if (keyDown(UP_ARROW)){
  background("green");
}

if (keyDown(DOWN_ARROW)){
 background("blue");
}
  drawSprites ();
  
}




