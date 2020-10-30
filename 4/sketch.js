
let sketch1 = function(p) {
  let button;
  let prompts = ["Spongebob eating candy while Squidward puts on clown makeup", "Donald Trump in a Donald Duck costume", "Jack Skellington carving a pumpkin", "Zombified Sanderson Sisters", "Addams family shopping at Target", "apple bobbing except the apples are skulls", "black cat stepping on a crack, breaking your mama's back", "Monster Mash", "Oogie Boogie in a Santa costume", "witches sitting around a campfire roasting marshmallows", "Frankenstein's monster in a werewolf costume", "three skeletons as the Three Musketeers", "vampire Romen and mummy Juliet"];
  let randomPrompt;
  let animating = false;
  let buttonTurn = 0;
  let buttonMove = 475;
  let buttonU = 0.5;

  p.setup = function() {
    p.createCanvas(p.windowWidth*.25, 700);
    p.button = p.createButton("Pull Prompt!");
    p.button.mousePressed(p.buttonPressed);
    p.textAlign(p.CENTER);
    p.background(200);


  }

  p.draw = function() {
    if (animating == true) {
      p.drawButton(buttonMove, buttonTurn);
      buttonTurn += 0.15;
      buttonMove += buttonU;
      if (buttonMove >= 534.6 || buttonMove <= 475) {
        buttonU = -buttonU;
      }
    }
    // p.circle(20, 20, 20);
  }

  p.randomizer = function() {
    animating = false;
    p.push();
    p.noStroke();
    p.fill('#757472');
    p.rect(0, 0, 1000, 50);
    p.pop();

    p.push();
    randomPrompt = p.int(p.random(prompts.length));
    p.rectMode(p.CENTER);
    p.fill(255);
    p.textSize(15);
    // p.textStyle(p.BOLD);
    p.text(`${prompts[randomPrompt]}`, 250, 30);
    p.pop();
  }

  p.buttonPressed = function() {
    setTimeout(p.randomizer, 2000);
    animating = true;
  }

  p.drawButton = function(x, rotation) {
    p.push();
    p.noStroke();
    p.fill('#757472');
    p.rect(0, 0, 1000, 50);
    p.fill(255);
    p.stroke('orange');
    p.strokeWeight(4);
    p.circle(x, 25, 30);
    p.pop();
    p.push();
    p.noStroke();
    p.rectMode(p.CENTER);
    p.translate(x, 25);
    p.rotate(rotation);
    p.fill(0);
    p.rect(0, 0, 12, 2);
    p.rect(0, 0, 2, 12);
    p.pop();
  }
};


let sketch2 = function(p) {
  p.setup = function() {
    p.createCanvas(p.windowWidth*.68, 700);
    p.background('#E5DAC6');
    p.stroke(255);
    p.strokeWeight(3);

  }

  p.draw = function() {
    if (p.mouseIsPressed) {
      p.stroke(255);
      p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    }
  }

  p.keyTyped = function() {
    if (p.key === 's') {
      p.saveCanvas('fileName', 'jpg');
    } else if (p.key === 'c') {
      p.background('#E5DAC6');
    }
  }
};
let cnv1 = new p5(sketch1, document.getElementById('left'));
let cnv2 = new p5(sketch2, document.getElementById('right'));
