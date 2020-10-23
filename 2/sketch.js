let array = [];
let bg;
let on = true;
let noiseOffset = 0.0;
let strokeWidth = 2;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  drawGrid();


  stroke(255);

}

function draw() {


  if (mouseIsPressed) {

    if (on == true) {
      // bg = background(1, 1, 1, 5);
      drawGrid();

    }

    strokeWeight(strokeWidth);
    noiseOffset += 0.05
    strokeWidth = noise(noiseOffset) * 7;
    line(mouseX, mouseY, pmouseX, pmouseY);
    // array.push([mouseX, mouseY]);


  }
}

function keyTyped() {

  if (key === 's') {
    saveCanvas('fileName', 'jpeg');
  } else if (key === 'c') {
    clear();
    background(0);
  } else if (key === 'r') {
    on = false
  }
  // } else if (key === ' ') {
  //   strokeWeight(5);
  //   stroke(255);
  //   noFill();
  //   beginShape();
  //   for (let i = 0; i < array.length; i++) {
  //     curveVertex(array[i][0], array[i][1]);
  //   }
  //   endShape();


return false;
}

function drawGrid() {
  numCells = 30;
    for (let i = 0; i <= width; i += width/numCells) {
      for (let j = 0; j <= height; j += height/numCells) {
        push();
        fill(5, 5, 5, 5);
        stroke(255);
        strokeWeight(1);
        rect(i, j, width/numCells, height/numCells);
        pop();
      }

    }
}
