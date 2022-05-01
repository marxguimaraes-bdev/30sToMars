const readline = require('readline');
const Probe = require('./classes/probe');

// Interface to read the input
const readInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// Read lines from input and store them in an array
const lines = [];
readInterface.on('line', (line) => lines.push(line));

readInterface.on('close', () => {
  // read plateau coordinates from the first line
  const [plateauX, plateauY] = lines.shift().split(' ');
  const plateau = { x: parseInt(plateauX), y: parseInt(plateauY) };

  // then iterate until all lines are processed
  while(lines.length) {
    // read probe initial landing from next line
    const [initialX, initialY, initialD] = lines.shift().split(' ');
    const probe = new Probe(parseInt(initialX), parseInt(initialY), initialD);

    // read commands from next line
    const commandArray = lines.shift().split('');

    commandArray.forEach((command) => {
      switch(command) {
        case 'R':
          probe.turn('R');
          break;
        case 'L':
          probe.turn('L');
          break;
        case 'M':
          probe.move(plateau);
          break;
        default:
          throw new Error('Invalid command found');
      }
    });

    // then output the probe's final coordinates, good work!
    console.log(probe.getStatus());
  }
});
