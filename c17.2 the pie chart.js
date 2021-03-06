<!doctype html>
<script src="https://eloquentjavascript.net/code/chapter/16_game.js"></script>
<script src="https://eloquentjavascript.net/code/levels.js"></script>
<script src="https://eloquentjavascript.net/code/chapter/17_canvas.js"></script>

<canvas width="600" height="300"></canvas>
<script>
  let cx = document.querySelector("canvas").getContext("2d");
  let total = results
    .reduce((sum, {count}) => sum + count, 0);
  let currentAngle = -0.5 * Math.PI;
  let centerX = 300, centerY = 150;

  // Add code to draw the slice labels in this loop.
  for (let result of results) {
    let sliceAngle = (result.count / total) * 2 * Math.PI;
    cx.beginPath();
    cx.arc(centerX, centerY, 100,
           currentAngle, currentAngle + sliceAngle);
    cx.lineTo(centerX, centerY);
    cx.fillStyle = result.color;
    cx.fill();
    
    cx.translate(centerX, centerY);
    cx.rotate((2 * currentAngle + sliceAngle) / 2);
    cx.textAlign = "end";
    cx.textBaseline = "middle";
    cx.font = "12px sans-serif";
    cx.fillStyle = "black";
    cx.fillText(result.name + "   ", 100, 0);
    cx.resetTransform();
    currentAngle += sliceAngle;
  }
</script>