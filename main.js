// Your code here!
const combinator = require('./color-Combinator');
const deconstructor = require('./color-Deconstructor.js');

const color1 = getInput(0);
const color2 = getInput(1);

const combine = combinator(color1, color2);
const decom = deconstructor(color1);

if(color1 === undefined){
  console.log('input a color');
}

if(color1 !== undefined && color2 !== undefined){
   console.log(combine);
}

if(color1 !== undefined && color2 === undefined){
   console.log(decom);
}


// Our helper function here! Don't  touch!
function getInput(i) {
  return process.argv[i + 2];
}
