// Your code here!
//connecting with file 'color-combinator.js' to get the value from it
const combinator = require('./color-Combinator');
const deconstructor = require('./color-Deconstructor');

//assign getInput(0) value from user to color1
const color1 = getInput(0);
const color2 = getInput(1);

//assign function with parameter color1 & color2 to var for storing
const combine = combinator(color1, color2);
const decom = deconstructor(color1);

if(!color1 ){
  console.log('input a color');
}

if(color1  && color2 ){
   console.log(combine);
}

if(color1 && !color2){
   console.log(decom);
}


// Our helper function here! Don't  touch!
function getInput(i) {
  return process.argv[i + 2];
}
