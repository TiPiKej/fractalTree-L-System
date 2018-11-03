class Tree {
  constructor() {
    this.resetAll();

    this.rules = [];
    this.rules[0] = {
      a: "F",
      b: "FF+[+F-F-F]-[-F+F+F]"
    };

    // this.generate = this.generate.bind(this);
  }

  drawLine() {
    this.resetDraw();

    Array.from(this.genStr).forEach(curChar => {
      switch (curChar) {
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
        if (el.a === current && !find) {
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
    this.cuttingLength = 0.56;

    this.axiom = "F";
    this.genStr = this.axiom;

    this.len = 100;
    this.angleCount = 30;

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
