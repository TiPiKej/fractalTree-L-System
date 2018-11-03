const cuttingLength = 0.56;

const axiom = "F";
let genStr = axiom;

let rules = [];
rules[0] = {
  a: "F",
  b: "FF+[+F-F-F]-[-F+F+F]"
};

function generate() {
  let newString = "";
  Array.from(genStr).forEach(current => {
    let find = false;

    Array.from(rules).some(el => {
      if (el.a === current && !find) {
        find = true;
        newString += el.b;
        return el.a === current;
      }
    });

    if (!find) newString += current;
  });
  genStr = newString;
  len *= cuttingLength;
  drawLine();
}
