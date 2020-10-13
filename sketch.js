let array = [];

function setup() {
  createCanvas(600, 600);
  background(220);


}

function draw() {

  if (mouseIsPressed) {
    // line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);


  }
}

function keyTyped() {

  if (key === 's') {
    console.log(`space`);
    saveCanvas('fileName', 'jpeg');
  } else if (key === ' ') {
    strokeWeight(5);
    noFill();
    beginShape();
    for (let i = 0; i < array.length; i++) {
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();
  }

  return false;
}
