<!doctype html>
<script src="https://eloquentjavascript.net/code/chapter/16_game.js"></script>
<script src="https://eloquentjavascript.net/code/levels.js"></script>

<link rel="stylesheet" href="css/game.css">

<body>
<script>
  let pause = false;
  // The old runLevel function. Modify this...
  function runLevel(level, Display) {

    window.addEventListener("keydown", pauseGame);
    
    let display = new Display(document.body, level);
    let state = State.start(level);
    let ending = 1;
    return new Promise(resolve => {
      runAnimation(time => {
        if (pause) state = state;
        else state = state.update(time, arrowKeys);
        
        display.syncState(state);
        if (state.status == "playing") {
          return true;
        } else if (ending > 0) {
          ending -= time;
          return true;
        } else {
          display.clear();
          resolve(state.status);
          window.removeEventListener("keydown", pauseGame);
          trackKeys("unreg");
          return false;
        }
      });
    });
  }
  
  function pauseGame(event) {
 	if (event.key == "Escape") {
    pause = !pause;
    if (pause) console.log("The game is paused!");
    else console.log("The game is on!");
    }
  }

function trackKeys(keys) {
   if (keys == "unreg") {
  	console.log("Remove arrow keys listener.");
    	window.removeEventListener("keydown", track);
  	window.removeEventListener("keyup", track);
  }
  
  let down = Object.create(null);
  function track(event) {
    if (keys.includes(event.key)) {
      down[event.key] = event.type == "keydown";
      event.preventDefault();
    }
  }
  	window.addEventListener("keydown", track);
  	window.addEventListener("keyup", track);
  return down;
}
  
  runGame(GAME_LEVELS, DOMDisplay);
</script>
</body>