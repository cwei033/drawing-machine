let array = [];

function setup() {
  createCanvas(1000, windowHeight);
  background('#E5DAC6');
  stroke(255);
  strokeWeight(3);

}

function draw() {

  // drawRectangles();

  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
    // array.push([mouseX, mouseY]);


  }
}

function keyTyped() {

  if (key === 's') {
    saveCanvas('fileName', 'jpeg');
  } else if (key === '1') {

  }
    // } else if (key === ' ') {
    //   strokeWeight(5);
    //   stroke(255);
    //   noFill();
    //   // beginShape();
    //   for (let i = 0; i < array.length; i++) {
    //     line(array[i][0], array[i][1], array[i+1][0], array[i+1][1]);
    //   }
      // endShape();
  // }

  return false;
}

function drawRectangles() {
  push();
  rectMode(CENTER);
  fill(100);
  rect(width/2, 150, 1000, windowHeight/3);
  fill(150);
  rect(width/2, windowHeight*.33+150, 1000, windowHeight/3);
  fill(200);
  rect(width/2, windowHeight*.66+160, 1000, windowHeight/3);
  pop();
}
