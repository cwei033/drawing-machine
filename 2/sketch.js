let array = [];

function setup() {
  createCanvas(900, 600);
  background(0);
  stroke(255);
  strokeWeight(3);

}

function draw() {

  if (mouseIsPressed) {

    line(mouseX, mouseY, pmouseX, pmouseY);
    // array.push([mouseX, mouseY]);


  }
}

function keyTyped() {

  if (key === 's') {
    console.log(`space`);
    saveCanvas('fileName', 'jpeg');
    // } else if (key === ' ') {
    //   strokeWeight(5);
    //   stroke(255);
    //   noFill();
    //   beginShape();
    //   for (let i = 0; i < array.length; i++) {
    //     curveVertex(array[i][0], array[i][1]);
    //   }
    //   endShape();
  }

  return false;
}
