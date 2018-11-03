let tree;
let rulesList;

function setup() {
  createCanvas(600, 600);

  rulesList = new RulesList();

  // add default rules
  rulesList.add({
    a: "F",
    b: "FF+[+F-F-F]-[-F+F+F]"
  });

  tree = new Tree();

  angleMode(DEGREES);

  // add events listeners

  const generate = select("#next");
  generate.mousePressed(() => tree.generate());

  const reset = select("#reset");
  reset.mousePressed(() => tree.resetAll());

  const rAdd = select("#rAdd");
  rAdd.mousePressed(() => rulesList.add());

  const rRem = select("#rRem");
  rRem.mousePressed(() => rulesList.remove());
}
