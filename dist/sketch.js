let tree;

function setup() {
  createCanvas(600, 600);

  tree = new Tree();

  angleMode(DEGREES);
  tree.drawLine();

  const generate = select("#next");
  generate.mousePressed(() => tree.generate());

  const reset = select("#reset");
  reset.mousePressed(() => tree.resetAll());
}
