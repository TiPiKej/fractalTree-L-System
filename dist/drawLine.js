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
        rotate(angleCount);
        break;
      case "-":
        rotate(-angleCount);
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
