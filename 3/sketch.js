let array = [];
let dots;
let prompts = ["Spongebob eating candy while Squidward puts on clown makeup", "Donald Trump in a Donald Duck costume", "Jack Skellington carving a pumpkin", "Zombified Sanderson Sisters", "Addams family shopping at Target", "apple bobbing except the apples are skulls", "black cat stepping on a crack, breaking your mama's back", "Monster Mash", "Oogie Boogie in a Santa costume", "witches sitting around a campfire roasting marshmallows", "Frankenstein's monster in a werewolf costume", "three skeletons as the Three Musketeers", "vampire Romen and mummy Juliet"];
let randomPrompt;
let animating = false;
let buttonTurn = 0;
let button;
let buttonMove = 475;
let buttonU = 0.5;

function setup() {
  createCanvas(1000, windowHeight);
  background('#E5DAC6');
  stroke(255);
  strokeWeight(3);
  textAlign(CENTER);

  button = createButton("Pull Prompt!");
  button.mousePressed(buttonPressed);

}

function draw() {

  if (animating == true) {
    drawButton(buttonMove, buttonTurn);
    buttonTurn += 0.15;
    buttonMove += buttonU;
    if (buttonMove >= 534.6 || buttonMove <= 475) {
      buttonU = -buttonU;
    }
  }
  if (mouseIsPressed) {
    stroke(255);
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

function randomizer() {
  animating = false;
  noStroke();
  fill('#757472');
  rect(0, 0, 1000, 50);

  push();
  randomPrompt = int(random(prompts.length));
  rectMode(CENTER);
  fill(255);
  textSize(20);
  textStyle(BOLD);
  text(`${prompts[randomPrompt]}`, width / 2, 30);
  pop();


}

function buttonPressed() {
  setTimeout(randomizer, 2000);
  animating = true;
}

function drawButton(x, rotation) {
  push();
  noStroke();
  fill('#757472');
  rect(0, 0, 1000, 50);
  fill(255);
  stroke('orange');
  strokeWeight(4);
  circle(x, 25, 30);
  pop();
  push();
  noStroke();
  rectMode(CENTER);
  translate(x, 25);
  rotate(rotation);
  fill(0);
  rect(0, 0, 12, 2);
  rect(0, 0, 2, 12);
  pop();
}
