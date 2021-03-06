<!doctype html>

<p>🎈</p>

<script>
  let size = "20";
  let element = document.querySelector("p");
  element.style.fontSize = size + "px";
  
  function air(event) {
    if (event.key == "ArrowUp") {
      	size *= 1.1;
      
        if (size < 100) element.style.fontSize = size + "px";
        else {
         	element.replaceChild(document.createTextNode("💥"), element.firstChild);
          	window.removeEventListener("keydown", air);
        }
    }
    
    if (event.key == "ArrowDown") {
      size /= 1.1;
      element.style.fontSize = size + "px";
    }
    
      event.preventDefault();
  }
 
  window.addEventListener("keydown", air);

</script>