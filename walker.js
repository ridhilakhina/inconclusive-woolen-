let collectionOfColors = ["red", "orange", "yellow", "green", "blue", "purple", "white"];
let walkingTeam = [];

// Ensure the Walker class is defined
class Walker {
  constructor(x, y, stepSize, color) {
    this.x = x;
    this.y = y;
    this.stepSize = stepSize;
    this.color = color;
  }

  doOneStep() {
    let direction = floor(random(5));
    if (direction === 0) {
      this.x += this.stepSize;
    } else if (direction === 1) {
      this.x -= this.stepSize;
    } else if (direction === 2) {
      this.y += this.stepSize;
    } else {
      this.y -= this.stepSize;
    }

    // Keep the walker within canvas boundaries
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);

    // Draw the walker
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, 100, 100);
  }
}

// Populate walkingTeam with Walker instances
for(let t = 0; t < collectionOfColors.length; t++) {
  walkingTeam.push(new Walker(200, 200, 5, collectionOfColors[t]));
}



