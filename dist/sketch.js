const angleCount = 30;
const cuttingLength = 0.56;
const axiom = "F";

let len = 100;
let genStr = axiom;
let angle;

let rules = [];
rules[0] = {
  a: "F",
  b: "FF+[+F-F-F]-[-F+F+F]"
};

function generate() {
  let newString = "";

  Array.from(genStr).forEach(current => {
    Array.from(rules).some(el => {
      if (el.a === current) {
        newString += el.b;
        return el.a === current;
      } else newString += current;
    });
  });

  genStr = newString;

  len *= cuttingLength;
  drawLine();
}

function drawLine() {
  background(51);
  stroke(255, 100);

  resetMatrix();
  translate(width / 2, height);

  Array.from(genStr).forEach(current => {
    switch (current) {
      case "F":
        line(0, 0, 0, -len);
        translate(0, -len);
        break;
      case "+":
        rotate(angle);
        break;
      case "-":
        rotate(-angle);
        break;
      case "[":
        push();
        break;
      case "]":
        pop();
        break;
    }
  });
}

function setup() {
  createCanvas(600, 600);

  angle = radians(angleCount);
  drawLine();

  createP();
  const button = createButton("Next step");
  button.mousePressed(generate);
}
