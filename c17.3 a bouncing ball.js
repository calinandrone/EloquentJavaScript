<!doctype html>
<script src="code/chapter/16_game.js"></script>
<script src="code/levels.js"></script>
<script src="code/chapter/17_canvas.js"></script>

<canvas width="400" height="400"></canvas>
<script>
  let cx = document.querySelector("canvas").getContext("2d"),
      direction = Math.random() * 2 * Math.PI,
      timeZero = Date.now(), 
      Xfactor = Math.cos(direction), Yfactor = Math.sin(direction),
      speedX = Xfactor * 400, speedY = Yfactor * 400,
      x = 200, y = 200,
      lastTime = null;
  
  function frame(time) {
    if (lastTime != null) {
      updateAnimation(Math.min(100, time - lastTime) / 1000);
    }
    lastTime = time;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  function updateAnimation(step) {
    if (x > 380 || x < 20) speedX *= -1;
    if (y > 380 || y < 20) speedY *= -1;
    x += speedX * step;
    y += speedY * step;

    cx.clearRect(0, 0, 400, 400);
    cx.strokeRect(0, 0 , 400, 400);
    cx.beginPath();
    cx.arc(x, y, 20, 0 , 7);
    cx.fillStyle = "red";
    cx.fill();
  }

</script>