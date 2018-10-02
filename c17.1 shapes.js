<!doctype html>
<script src="code/chapter/16_game.js"></script>
<script src="code/levels.js"></script>
<script src="code/chapter/17_canvas.js"></script>

<canvas width="600" height="200"></canvas>
<script>
  let cx = document.querySelector("canvas").getContext("2d");
  let canvasHeight = document.querySelector("canvas").height;
  let space = 20, currentX = space;
  
  function trapezoid (B, b, h) {
    let xStart = (B-b)/2 + currentX, yStart = (canvasHeight - h) / 2;
    cx.beginPath();
  	cx.moveTo(xStart,yStart);
    cx.lineTo(xStart + b, yStart);
    cx.lineTo(B + currentX, yStart + h);
    cx.lineTo(currentX, yStart + h);
    cx.closePath();
    cx.stroke();
    currentX += B + space;
  }
  
  function redDiamond (l) {
  	cx.fillStyle = "red";
    cx.save();
    cx.translate(currentX + l*Math.sqrt(2) / 2, canvasHeight/2);
    cx.rotate(Math.PI / 4);
    cx.fillRect(-l/2, -l/2, l, l);
    cx.restore();
    currentX += Math.ceil(l*Math.sqrt(2)) + space;
  }
  
  function zigzag (lineLength, step, number) {
  	let totalHeight = step * number;
    horizontalLength = Math.sqrt(lineLength * lineLength - step * step);
    let x = currentX, y = (canvasHeight - totalHeight) / 2;
    cx.moveTo(x, y);
    for (let i = 0; i < number; i++) {
      if (i % 2 == 0) {
        cx.lineTo(x + horizontalLength, y + step);
        x += horizontalLength;
      }
      else {
        cx.lineTo(x - horizontalLength, y + step);
        x += -horizontalLength;
      }
      y += step;
    }
	cx.stroke();
    currentX += Math.ceil(horizontalLength) + space;
  }
  
  function spiral(angle, step) {
    let rMax = Math.ceil(100 * step * angle / (2 * Math.PI));
    let x = currentX + rMax, y = canvasHeight / 2;
    cx.translate(x, y);
    cx.beginPath();
    cx.moveTo(0, 0);
    let r = 0, alpha = 0;
    for (let i = 0; i<100; i++) {
      r += step * angle / (2 * Math.PI);
      cx.lineTo(r*Math.cos(alpha), r*Math.sin(alpha));
      alpha += angle;
    }
    cx.stroke();
    cx.resetTransform();
    currentX += 2 * rMax + space;
  }
  
  function yellowStar(radius, number) {
    let x = currentX + radius, y = canvasHeight / 2;
    let angle = 2 * Math.PI / number, alpha = 0;
    cx.translate(x, y);
    cx.fillStyle = "yellow";
    cx.beginPath();
    cx.moveTo(radius, 0);
    for (let i = 0; i < number; i++) {
      alpha += angle;
      cx.quadraticCurveTo(0, 0, radius * Math.cos(alpha), radius * Math.sin(alpha));
    }
    cx.fill();
    cx.resetTransform();
    currentX += 2 * radius + space;
  }
  
  
  trapezoid(90, 60, 80);
  redDiamond(70);
  zigzag(70, 7, 12);
  spiral(0.07*Math.PI, 10);
  yellowStar(50, 8);

</script>