<!doctype html>
<script src="code/chapter/18_http.js"></script>

<div id="grid"></div>
<button id="next">Next generation</button>

<script>
  document.querySelector("#grid").appendChild(document.createElement("table"));
  let table = document.querySelector("table"),
      gridW = 30, gridH = 20,
      button = document.querySelector("#next");
  
  for (let i = 0; i < gridH; i++) {
    table.appendChild(document.createElement("tr"));
    for (let j = 0; j < gridW; j++) {
      let td = document.createElement("td");
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "cb";
      checkbox.id = j + "," + i;
      checkbox.setAttribute("x", j);
      checkbox.setAttribute("y", i);
      if (Math.random() < 0.3) checkbox.checked = true;
      td.appendChild(checkbox);
      //td.appendChild(document.createTextNode(checkbox.id));
      document.getElementsByTagName("tr")[i].appendChild(td);
    }
  }
  
  function aliveNeighborsOf (checkbox) {
    let checkboxes = Array.from(document.getElementsByClassName("cb")),
        x = Number(checkbox.getAttribute("x")),
        y = Number(checkbox.getAttribute("y")),
        neighbors = [],
        n = 0;
    for (let cbox of checkboxes) {
      let xc = cbox.getAttribute("x"),
          yc = cbox.getAttribute("y"),
          id = cbox.id;
      if ((xc == x - 1 || xc == x + 1 || xc == x) &&
          (yc == y - 1 || yc == y + 1 || yc == y) &&
          !(xc == x && yc == y)) 
        neighbors.push(cbox);
    }
    for (let ngb of neighbors) if (ngb.checked) n++
    return n;
  }
  
  function liveOrDie() {
    let died = 0, lived = 0, resurected = 0,
        checkboxes = Array.from(document.getElementsByClassName("cb"));
    for (let cbox of checkboxes) {
      let aliveNeighbors = aliveNeighborsOf(cbox);
      if (cbox.checked && (aliveNeighbors < 2 || aliveNeighbors > 3)) {
        died++;
        cbox.checked = false;
      }
      else if (cbox.checked && (aliveNeighbors == 2 || aliveNeighbors == 3)) {
        lived++;
        cbox.checked = true;
        
      }
      else if (!cbox.checked && aliveNeighbors == 3) {
        resurected++;
        cbox.checked = true;
      }
    }
    console.log(died, "died,", lived, "lived and Jesus was here",resurected,"times.");
    died = 0; lived = 0; resurected = 0;
  }

  button.addEventListener("click", liveOrDie)
  
</script>