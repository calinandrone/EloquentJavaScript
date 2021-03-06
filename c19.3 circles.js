<!doctype html>
<script src="https://eloquentjavascript.net/code/chapter/19_paint.js"></script>

<div></div>
<script>
  function circle(start, state, dispatch) {
    function drawCircle(pos) {
    let xStart = Math.min(start.x, pos.x),
        yStart = Math.min(start.y, pos.y),
        xEnd = Math.max(start.x, pos.x),
        yEnd = Math.max(start.y, pos.y),
        radius = xEnd - xStart,
        drawn = [];
    for (let y = yStart - radius; y <= Math.max(yEnd, xEnd); y++) {
      for (let x = xStart- radius; x <= xEnd; x++) {
        if ((x-xStart)*(x-xStart) + (y-yStart)*(y-yStart) <= radius * radius)
        drawn.push({x, y, color: state.color});
      }
    }
    dispatch({picture: state.picture.draw(drawn)});
  }
  drawCircle(start);
  return drawCircle;

  }

  let dom = startPixelEditor({
    tools: Object.assign({}, baseTools, {circle})
  });
  document.querySelector("div").appendChild(dom);
</script>