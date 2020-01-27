const upper = str => str.toUpperCase();
const arrify = str => Array.from(str);
const underscore = str => str.join('_');
const log = str => console.log(str);

const pipe = (...functions) => val => functions.reduce((value, fn) => fn(value), val)

const name = pipe(
  upper,
  arrify,
  underscore,
  log
)('andrew'); //A_N_D_R_E_W
