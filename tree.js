class Tree {
  constructor() {
    this.resetAll();

    // this.generate = this.generate.bind(this);
    // this.takeRules = this.takeRules.bind(this);
  }

  takeRules() {
    const rules = document.querySelector("#c-rules");

    rules.childNodes.forEach(li => {
      const a = li.childNodes[0].childNodes[1].value;
      const b = li.childNodes[1].childNodes[1].value;

      this.rules.push({
        a,
        b
      });
    });
  }

  drawLine() {
    this.resetDraw();

    Array.from(this.genStr).forEach(curChar => {
      switch (curChar.toUpperCase()) {
        case "F":
          line(0, 0, 0, -this.len);
          translate(0, -this.len);
          break;
        case "+":
          rotate(this.angleCount);
          break;
        case "-":
          rotate(-this.angleCount);
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

  generate() {
    let newString = "";
    Array.from(this.genStr).forEach(current => {
      let find = false;

      Array.from(this.rules).some(el => {
        if (el.a === current.toUpperCase() && !find) {
          find = true;
          newString += el.b;
          return el.a === current;
        }
      });

      if (!find) newString += current;
    });
    this.genStr = newString;
    this.len *= this.cuttingLength;
    this.drawLine();
  }

  resetAll() {
    this.rules = [];
    this.takeRules();

    const cuttingLength = select("#cutLen").value();
    const axiom = select("#axiom").value();
    const angleCount = select("#angleCount").value();
    const startLength = select("#stLen").value();

    this.cuttingLength = cuttingLength ? cuttingLength : 0.56;

    this.axiom = axiom ? axiom : "F";
    this.genStr = this.axiom;

    this.len = startLength ? startLength : 100;
    this.angleCount = angleCount ? angleCount : 30;

    this.resetDraw();
    this.drawLine();
  }

  resetDraw() {
    background(51);
    stroke(255, 100);
    resetMatrix();
    translate(width / 2, height);
  }
}
