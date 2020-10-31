let sketch1 = function(p) {
  let button;
  let prompts = ["Squidward putting on clown makeup", "Donald Trump in a Donald Duck costume", "Jack Skellington carving a pumpkin", "Zombified Sanderson Sisters", "Addams family shopping at Target", "apple bobbing except the apples are skulls", "black cat stepping on a crack", "Monster Mash", "Oogie Boogie in a Santa costume", "witches giving out candy", "Frankenstein's monster in a werewolf costume", "three skeletons as the Three Musketeers", "vampire Romen and mummy Juliet"];
  let randomPrompt;
  let animating = false;
  let buttonTurn = 0;
  let buttonMove = p.windowWidth*0.125;
  let buttonU = 0.5;
  let buttonRU = 0.15;
  let bg;

  p.preload = function() {
    p.titleFont = p.loadFont('SigmarOne-Regular.ttf');
    p.halloweenFont = p.loadFont('Rye-Regular.ttf');
    p.playFont = p.loadFont('IMFellDWPicaSC-Regular.ttf');
    p.typeFont = p.loadFont('atwriter.ttf');
    p.bg = p.loadImage('pinstripe.jpg');
  }

  p.setup = function() {
    p.createCanvas(p.windowWidth * .25, 700);
    p.push();
    p.button = p.createButton("Pull Prompt!");
    p.button.mousePressed(p.buttonPressed);
    p.pop();
    p.textAlign(p.CENTER);
    p.background(p.bg);
    p.fill(190, 230);
    p.noStroke();
    p.rect(p.windowWidth * 0, 180, 1000, 270);
  }

  p.draw = function() {
    if (animating == true) {
      p.drawButton(buttonMove, buttonTurn);
      buttonTurn += buttonRU;
      buttonMove += buttonU;
      if (buttonMove >= p.windowWidth*0.135 || buttonMove <= p.windowWidth*0.115) {
        buttonU = -buttonU;
        buttonRU = -buttonRU;
      }
    }
    p.drawTitle();
  }

  p.randomizer = function() {
    animating = false;
    p.push();
    p.rectMode(p.CENTER);
    p.noStroke();
    p.fill('#757472');
    p.rect(p.windowWidth * 0.125, 530, 1000, 80);
    p.fill(0);
    p.text(`- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -`, p.windowWidth * 0.125, 507);
    p.text(`- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -`, p.windowWidth * 0.125, 565);
    p.pop();

    p.push();
    randomPrompt = p.int(p.random(prompts.length));
    p.rectMode(p.CENTER);
    p.fill(0);
    p.stroke(255);
    p.strokeWeight(3)
    p.textSize(p.windowWidth * 0.01);
    p.textFont(p.typeFont);
    p.text(`${prompts[randomPrompt]}`, p.windowWidth * 0.125, 535);
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
    p.rectMode(p.CENTER);
    p.rect(p.windowWidth * 0.125, 530, 1000, 80);
    p.fill(0);
    p.text(`- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -`, p.windowWidth * 0.125, 507);
    p.text(`- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -`, p.windowWidth * 0.125, 565);
    p.fill(255);
    p.text(`   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -`, p.windowWidth * 0.125, 535);
    p.fill(50);
    p.stroke('#db8204');
    p.strokeWeight(4);
    p.circle(x, 530, 25);
    p.pop();
    p.push();
    p.noStroke();
    p.rectMode(p.CENTER);
    p.translate(x, 530);
    p.rotate(rotation);
    p.fill(255);
    p.rect(0, 0, 12, 2);
    p.rect(0, 0, 2, 12);
    p.pop();
  }

  p.drawTitle = function() {
    p.textSize(p.windowWidth * 0.034);
    p.textFont(p.halloweenFont);
    p.stroke(0);
    p.strokeWeight(6);
    p.fill(255);
    p.text(`PICTIONARY`, p.windowWidth * 0.125, 120);
    p.textSize(p.windowWidth * .012);
    p.strokeWeight(5);
    p.textFont(p.playFont);
    p.text(`[halloween edition]`, p.windowWidth * 0.18, 142);
    p.push();
    p.textAlign(p.LEFT);
    p.textSize(p.windowWidth * 0.013);
    p.fill(0);
    p.textFont(p.halloweenFont);
    p.noStroke();
    p.text(`- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -`, p.windowWidth * 0.005, 200);
    p.text(`- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -`, p.windowWidth * 0.005, 445);
    p.textFont(p.typeFont);
    p.stroke(255);
    p.strokeWeight(2);
    p.text(`how to play:`, p.windowWidth * 0.018, 223);
    p.textSize(p.windowWidth * 0.009);
    p.text(`1. press 'Pull Prompt!'`, p.windowWidth * 0.019, 253);
    p.text(`2. draw!`, p.windowWidth * 0.019, 283);
    p.text(`3. press 's' to save drawing`, p.windowWidth * 0.019, 313);
    p.text(`4. press 'p' to save prompt`, p.windowWidth * 0.019, 343);
    p.text(`5. send to friends and have them guess the prompt!`, p.windowWidth * 0.019, 357, p.windowWidth * 0.226, 70);
    p.text(`(press 'c' to clear canvas!)`, p.windowWidth * 0.021, 423);
    p.fill(225);
    p.noStroke();
    p.beginShape();
    p.noStroke();
    p.vertex(p.windowWidth * 0.004, 7.68);
    p.vertex(p.windowWidth * 0.246, 7.68);
    p.vertex(p.windowWidth * 0.246, 692.32);
    p.vertex(p.windowWidth * 0.004, 692.32);
    p.beginContour();
    p.vertex(p.windowWidth * 0.006, 10.76);
    p.vertex(p.windowWidth * 0.006, 689.24);
    p.vertex(p.windowWidth * 0.244, 689.24);
    p.vertex(p.windowWidth * 0.244, 10.76);
    p.endContour();
    p.endShape();
    p.pop();
  }

  p.keyTyped = function() {
    if (p.key === 'p') {
      p.saveCanvas('prompt', 'jpg');
    }
  }
};


let sketch2 = function(p) {
  let colorPicker;
  let slider;

  p.setup = function() {
    p.createCanvas(p.windowWidth * 0.68, 700);
    // p.halloweenFont = p.loadFont('Rye-Regular.ttf');
    p.background(255);
    p.colorPicker = p.createColorPicker('#000000');
    p.slider = p.createSlider(1, 60, 3);

  }

  p.draw = function() {
    let lineWidth = p.slider.value();
    p.strokeWeight(lineWidth);

    if (p.mouseIsPressed) {
      p.stroke(p.colorPicker.color());
      p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    }

    p.drawBorder();
  }

  p.keyTyped = function() {
    if (p.key === 's') {
      p.saveCanvas('drawing', 'jpg');
    } else if (p.key === 'c') {
      p.background(255);
    }
  }

  p.drawBorder = function() {
    p.push();
    // p.textFont(p.halloweenFont);
    p.fill(0);
    p.textSize(p.windowWidth * 0.013);
    p.noStroke();
    p.text(`- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -`, 0, 17);
    p.text(`- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -`, 0, 697);
    p.pop();
  }
};
let cnv1 = new p5(sketch1, document.getElementById('left'));
let cnv2 = new p5(sketch2, document.getElementById('right'));
