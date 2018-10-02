function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      //console.log(`Done in ${turn} turns`);
      return turn;
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    //console.log(`Moved to ${action.direction}`);
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  	let turns1 = 0, turns2 = 0;
  	for (let i = 0; i < 100; i++) {
  		let state = VillageState.random();
  		turns1 += runRobot(state, robot1, memory1);
      	turns2 += runRobot(state, robot2, memory2);
    }
  	console.log(`First robot completed the tasks in an average of ${turns1/100} turns.
The second robot completed the tasks in an average of ${turns2/100} turns.`);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);
