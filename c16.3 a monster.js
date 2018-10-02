<!doctype html>
<script src="code/chapter/16_game.js"></script>
<script src="code/levels.js"></script>

<link rel="stylesheet" href="css/game.css">
<style>.monster { background: purple }</style>

<body>
  <script>
    
    
    
    // Complete the constructor, update, and collide methods
    class Monster {
      constructor(pos, speed) {
        this.pos = pos;
        this.speed = speed;
      }

      get type() { return "monster"; }

      static create(pos) {
        return new Monster(pos.plus(new Vec(0, -1)), new Vec(4, 0));
      }

      update(time, state) {
        let newPos = this.pos.plus(this.speed.times(time));
        if (!state.level.touches(newPos, this.size, "wall")) {
          return new Monster(newPos, this.speed);
        } else {
          return new Monster(this.pos, this.speed.times(-1));
        }
      }

      collide(state) {
        let monsters = state.actors.filter(a => a.type == "monster");

        if (state.player.pos.y + state.player.size.y - monsters[0].pos.y <= 0.2 &&
        	state.player.pos.x + state.player.size.x >= monsters[0].pos.x &&
        	state.player.pos.x <= monsters[0].pos.x + monsters[0].size.x) {
          	console.log("Monster killed!");
          	let notMonsters = state.actors.filter(a => a.type != "monster");
        	return new State(state.level, notMonsters, "playing");
        } else return new State(state.level, state.actors, "lost");
      }
    }

    Monster.prototype.size = new Vec(1.2, 2);

    levelChars["M"] = Monster;

    runLevel(new Level(`
..................................
.################################.
.#..............................#.
.#..............................#.
.#..............................#.
.#...........................o..#.
.#..@...........................#.
.##########..............########.
..........#..o..o..o..o..#........
..........#...........M..#........
..........################........
..................................
`), DOMDisplay);
  </script>
</body>