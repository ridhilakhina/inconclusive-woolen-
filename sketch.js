function setup() {
  createCanvas(400, 400);
  background(0);
  frameRate(50);
}

function draw() {
  // Make each team member walk
  for(let t = 0; t < walkingTeam.length; t++) {
    walkingTeam[t].doOneStep();
  }
}