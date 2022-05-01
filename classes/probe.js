const axisMovement = {
  N: {
    axis: 'Y',
    multiplier: 1,
  },
  E: {
    axis: 'X',
    multiplier: 1,
  },
  S: {
    axis: 'Y',
    multiplier: -1,
  },
  W: {
    axis: 'X',
    multiplier: -1,
  },
}

// We store the directions in an array so that we don't need to map R and L for every direction
const directionArray = ['N', 'E', 'S', 'W'];

module.exports = class Probe {
  constructor(initialX, initialY, initialD) {
    // Initial coordinates
    this.currentX = initialX;
    this.currentY = initialY;

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

    console.log(`Probe is now facing ${directionArray[this.currentD]}`);
  }

  move() {
    const direction = directionArray[this.currentD]
    const { axis, multiplier } = axisMovement[direction];

    if (axis === 'X') {
      this.currentX = this.currentX + 1 * multiplier;
    }

    if (axis === 'Y') {
      this.currentY = this.currentY + 1 * multiplier;
    }

    console.log(`New probe position is: ${this.currentX}, ${this.currentY}`);
  }
}