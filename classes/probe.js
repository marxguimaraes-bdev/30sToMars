const axisMovement = {
  N: {
    axis: 'y',
    value: 1,
  },
  E: {
    axis: 'x',
    value: 1,
  },
  S: {
    axis: 'y',
    value: -1,
  },
  W: {
    axis: 'x',
    value: -1,
  },
}

// We store the directions in an array so that we don't need to map R and L for every direction
const directionArray = ['N', 'E', 'S', 'W'];

module.exports = class Probe {
  constructor(initialX, initialY, initialD) {
    // Initial coordinates
    this.pos = { x: initialX, y: initialY };

    const directionIndex = directionArray.findIndex(element => element === initialD);

    if (directionIndex < 0 || directionIndex > 3) {
      throw new Error('It looks like this probe is facing an unknown direction');
    }

    this.currentD = directionIndex;
  }

  turn(direction) {
    if (direction !== 'R' && direction != 'L') {
      console.log('Invalid direction, skipping turn command');
      return;
    }

    if (direction === 'R') {
      this.currentD = this.currentD + 1;
    }

    if (direction === 'L') {
      this.currentD = this.currentD - 1;
    }

    // This mod makes it so currentD always stays inside directionArray
    this.currentD = this.currentD % 4;
    if (this.currentD < 0) {
      this.currentD = this.currentD + 4;
    }
  }

  move(plateau) {
    const direction = directionArray[this.currentD]
    const { axis, value } = axisMovement[direction];

    const newPos = this.pos[axis] + value;

    // the probe doesn't move if it would fall off the plateau
    if (newPos >= 0 && newPos <= plateau[axis]) {
      this.pos[axis] = newPos;
    }
  }

  getStatus() {
    return `${this.pos.x} ${this.pos.y} ${directionArray[this.currentD]}`;
  }
}