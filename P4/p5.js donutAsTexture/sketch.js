let angle = 0;
let donut;


function setup() {
  createCanvas(400, 400, WEBGL);
    donut = createVideo(
    ['donut/donut.mp4'],
    donutLoad
  );

  donut.size(100, 100);
}

function donutLoad() {
  donut.loop();
  donut.volume(0);
}


function draw() {
  //pointLight(69, 255, 205, 0, -100, 0);
  //pointLight(255, 69, 113, 0, 100,0);
  //ambientLight(255, 69, 113);
  //directionalLight(255, 255, 0, 0, 0, -1);
  background(175);
  
  rectMode(CENTER);
  //translate(mouseX - width/2, mouseY - height/2);
  translate(0, 0, mouseX);
  noStroke();
  rotateX(angle);
  rotateY(angle * .2);
  rotateZ(angle * .3);
  //rect(0, 0, 150, 100);
  box();
  //specularMaterial(255);
  //ambientMaterial(255);
  texture(donut);
  //torus(50, 25);
    
  angle += 0.07;
}