<!doctype html>
<script src="code/chapter/18_http.js"></script>

<textarea id="code">console.log("hi");</textarea>
<button id="button">Run</button>
<pre id="out">0</pre>

<script>
  let code = document.querySelector('#code').textContent,
      out = document.querySelector('#out'),
      button = document.querySelector("#button");
  button.addEventListener("click", () => out.textContent = eval(code));
  
</script>