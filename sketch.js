function setup() {
  createCanvas(600, 600);
  background(220);
}

function draw() {
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyTyped() {

  if (key === ' ') {
    console.log(`space`);
    saveCanvas('fileName', 'jpeg');
  }

  return false;
}
