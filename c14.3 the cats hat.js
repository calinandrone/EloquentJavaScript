<!doctype html>

<style>body { min-height: 450px }</style>
<img src="img/cat.png" id="cat" style="position: absolute">
<img src="img/hat.png" id="hat" style="position: absolute">

<script>
  let cat = document.querySelector("#cat");
  let hat = document.querySelector("#hat");

  let angle = 0;
  let lastTime = null;
  function animate(time) {
    if (lastTime != null) angle += (time - lastTime) * 0.001;
    lastTime = time;
    let catTop = (Math.sin(angle) * 100 + 180);
    let catLeft = (Math.cos(angle) * 300 + 430);
    cat.style.top = catTop + "px";
    cat.style.left = catLeft + "px";

    hat.style.top = catTop + (Math.sin(angle) * 100 + 30) + "px";
    hat.style.left = catLeft + (-Math.cos(angle) * 100 + 10) + "px";

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
</script>