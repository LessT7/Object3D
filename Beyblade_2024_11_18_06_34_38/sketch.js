function setup() {
  createCanvas(400, 600, WEBGL);
}

function draw() {
  background(220,220,220);
  
  directionalLight(255, 255, 255, 0.5, 1, -0.5);
  ambientLight(220);
  
  rotateY(frameCount * 0.01);
  rotateY(frameCount * 0.02);
  
  push(); 
  fill(157,0,0);
  cone(100);
  pop();
  
  push();
  fill(0, 0, 255);
  translate(0, -70, 0);
  cylinder(10, 50);
  pop();
}