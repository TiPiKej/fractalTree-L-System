const angleCount = 30;

let len = 100;

function setup() {
  createCanvas(600, 600);

  angleMode(DEGREES);
  drawLine();

  createP();
  const button = createButton("Next step");
  button.mousePressed(generate);
}
