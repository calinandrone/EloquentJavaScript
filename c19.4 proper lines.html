<!doctype html>
<script src="https://eloquentjavascript.net/code/chapter/19_paint.js"></script>

<div></div>
<script>
  // The old draw tool. Rewrite this.
  function draw(pos, state, dispatch) {
    let storage = [pos];
//console.log(storage);
    function drawPixel({x, y}, state) {
      storage.push({x, y});
      let start = storage[storage.length-2];
      pos = storage[storage.length-1];
console.log("start:", start, "curent:", pos);
      let drawn={x, y, color: state.color};
      if ((pos.x == start.x - 1 || pos.x == start.x -1) &&
          (pos.y == start.y + 1 || pos.y == start.y - 1)) {
      	drawn = {x, y, color: state.color};
      }
      else if (pos.x > start.x + 1 || pos.y > start.y + 1 ||
              pos.x < start.x - 1 || pos.y < start.x - 1) {
//console.log(start, pos);
      	/*start.x = Number(start.x); start.y = Number(start.y);
    	pos.x = Number(pos.x); pos.y = Number(pos.y);*/
        line(start, state, dispatch);
      }
      dispatch({picture: state.picture.draw([drawn])});
    }
    drawPixel(pos, state);
    return drawPixel;
  }

  function line(start, state, dispatch) {
    function drawRectangle(pos) {
    let xStart = Math.min(start.x, pos.x), yStart = Math.min(start.y, pos.y),
        xEnd = Math.max(start.x, pos.x), yEnd = Math.max(start.y, pos.y),
        a = (pos.y - start.y) / (pos.x - start.x), 
        b = start.y - a * start.x,
        drawn = [];
console.log("pos, start:", pos.x, pos.y, start.x, start.y);
console.log("a , b:", a, typeof(a), b, typeof(b)); 
    if (a >= -1 && a <= 1) {
      for (let x = xStart; x <= xEnd; x++) {
        let y = Math.round(a * x + b);
        drawn.push({x, y, color: state.color});
      }
    } else if (a == Infinity || a == -Infinity) {
        for (let y = yStart; y <= yEnd; y++) {
          let x = xStart;
          drawn.push({x, y, color: state.color});
        }
     } else {
       	for (let y = yStart; y <= yEnd; y++) {

          let x = Math.round((y - b) / a);
console.log("x, y:", x, y, typeof(x));
          drawn.push({x, y, color: state.color});
        }
     }
    dispatch({picture: state.picture.draw(drawn)});
  }
  drawRectangle(start);
  return drawRectangle;
  }

  let dom = startPixelEditor({
    tools: {draw, line, fill, rectangle, pick}
  });
  document.querySelector("div").appendChild(dom);
</script>