let sketch1 = function(p) {
  let button;
  let prompts = ["Spongebob eating candy while Squidward puts on clown makeup", "Donald Trump in a Donald Duck costume", "Jack Skellington carving a pumpkin", "Zombified Sanderson Sisters", "Addams family shopping at Target", "apple bobbing except the apples are skulls", "black cat stepping on a crack, breaking your mama's back", "Monster Mash", "Oogie Boogie in a Santa costume", "witches sitting around a campfire roasting marshmallows", "Frankenstein's monster in a werewolf costume", "three skeletons as the Three Musketeers", "vampire Romen and mummy Juliet"];
  let randomPrompt;
  let animating = false;
  let buttonTurn = 0;
  let buttonMove = 240;
  let buttonU = 0.5;
  let buttonRU = 0.15;

  p.preload = function() {
    p.titleFont = p.loadFont('SigmarOne-Regular.ttf');
    p.halloweenFont = p.loadFont('Rye-Regular.ttf');
  }

  p.setup = function() {
    p.createCanvas(480, 700);
    p.button = p.createButton("Pull Prompt!");
    p.button.mousePressed(p.buttonPressed);
    p.textAlign(p.CENTER);
    p.background('orange');


  }

  p.draw = function() {
    if (animating == true) {
      p.drawButton(buttonMove, buttonTurn);
      buttonTurn += buttonRU;
      buttonMove += buttonU;
      if (buttonMove >= 260 || buttonMove <= 220) {
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
    p.rect(240, 580, 1000, 50);
    p.pop();

    p.push();
    randomPrompt = p.int(p.random(prompts.length));
    p.rectMode(p.CENTER);
    p.fill(0);
    p.textSize(15);
    p.text(`${prompts[randomPrompt]}`, 240, 580);
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
    p.rect(240, 580, 1000, 50);
    p.fill(255);
    p.stroke('orange');
    p.strokeWeight(4);
    p.circle(x, 580, 25);
    p.pop();
    p.push();
    p.noStroke();
    p.rectMode(p.CENTER);
    p.translate(x, 580);
    p.rotate(rotation);
    p.fill(0);
    p.rect(0, 0, 12, 2);
    p.rect(0, 0, 2, 12);
    p.pop();
  }

  p.drawTitle = function() {
    p.textSize(65);
    p.textFont(p.halloweenFont);
    p.stroke(255);
    p.strokeWeight(3);
    p.text(`PICTIONARY`, 240, 120);
    p.textSize(18);
    p.strokeWeight(2);
    p.textFont(p.halloweenFont);
    p.text(`[halloween edition]`, 350, 142);
  }
};


let sketch2 = function(p) {
  let colorPicker;
  let slider;

  p.setup = function() {
    p.createCanvas(1305, 700);
    p.background(255);
    p.colorPicker = p.createColorPicker('#000000');
    // p.colorPicker.parent('pickerPosition');
    p.slider = p.createSlider(1, 30, 3);

  }

  p.draw = function() {
    let lineWidth = p.slider.value();
    p.strokeWeight(lineWidth);

    if (p.mouseIsPressed) {
      p.stroke(p.colorPicker.color());
      p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    }
  }

  p.keyTyped = function() {
    if (p.key === 's') {
      p.saveCanvas('fileName', 'jpg');
    } else if (p.key === 'c') {
      p.background(255);
    }
  }
};
let cnv1 = new p5(sketch1, document.getElementById('left'));
let cnv2 = new p5(sketch2, document.getElementById('right'));
